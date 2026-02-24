"""
Lead scoring for JC's Tire & Brakes.
Score range: 1-5 (5 = hottest)

Scoring priorities:
1. How dangerous or revenue-critical is the job?
2. How ready is this person to spend money right now?
3. How complex is the situation likely to be?
"""


def calculate_priority_score(tier, urgency, symptoms, vehicle_year=None):
    """
    Args:
        tier:         service type string e.g. "brake-repair"
        urgency:      "asap", "this-week", "next-week", "flexible"
        symptoms:     list of symptom strings or None
        vehicle_year: int or string e.g. 2008 (optional)

    Returns:
        int: 1-5 (5 = hottest, call immediately)
    """
    score = 0

    # URGENCY (0-3 points)
    # "asap" = car may be undriveable. Close-today lead.
    # "flexible" = shopping around. Lowest priority.
    urgency_map = {
        "asap":      3,
        "this-week": 2,
        "next-week": 1,
        "flexible":  0,
    }
    score += urgency_map.get((urgency or "").lower(), 0)

    # SERVICE TYPE (1-3 points)
    # Safety-critical / high-ticket = 3. Customer has no choice but to fix it.
    # Medium-ticket = 2. Needed, but customer has timing flexibility.
    # Low-ticket = 1. Low revenue but real visit with upsell potential.
    # "not-sure" = 2. Unknown problem — treat as medium until qualified.
    tier_map = {
        "brake-repair":   3,
        "diagnostics":    3,
        "transmission":   3,
        "radiator":       3,
        "tires-rotation": 2,
        "alignment":      2,
        "ac":             2,
        "tune-up":        2,
        "battery":        2,
        "oil-change":     1,
        "nc-inspection":  1,
        "not-sure":       2,
    }
    score += tier_map.get((tier or "").lower(), 1)

    # SYMPTOMS (0-2 points)
    # More symptoms = car is struggling more = higher ticket job likely.
    symptom_count = len(symptoms) if symptoms else 0
    if symptom_count >= 3:
        score += 2
    elif symptom_count >= 1:
        score += 1

    # VEHICLE AGE BONUS (+1)
    # Old car + multiple symptoms = likely more work found on the lift.
    # Real upsell signal. Only fires if year was provided and 2+ symptoms.
    if vehicle_year and symptom_count >= 2:
        try:
            if int(vehicle_year) <= 2010:
                score += 1
        except (ValueError, TypeError):
            pass

    return max(1, min(5, score))