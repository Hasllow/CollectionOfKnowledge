require_relative 'Crud'

users = [
  { username: 'Gustavo', password: 'password1' },
  { username: 'Giovanna', password: 'password2' }
]

p Crud.create_secure_users(users)
