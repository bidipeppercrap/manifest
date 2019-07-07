def authenticate(username, password):
    return { "username": username, "password": password }

def identify(payload):
    return payload