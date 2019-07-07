def set_config(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://manifest:password@localhost/manifest'
    app.config['JWT_SECRET_KEY'] = 'nothingyoucanguess'