from reachTheTop import GROWTH_VALUE


def update_level(exp, instance) -> dict:
    '''
    Update Level with respect of GROWTH_VALUE
    '''
    new_expirience = exp + instance.current_exp
    current_max = instance.current_max
    current_level = instance.level
    
    while new_expirience >= current_max:
            new_expirience -= current_max
            current_max *= GROWTH_VALUE
            current_level += 1
        
    new_data = {
        'level': current_level,
        'current_exp': new_expirience,
        'current_max': current_max, 
    }
    
    return new_data
    