users = [
  { username: 'gustavo', password: 'teste' },
  { username: 'giovanna', password: 'teste2' },
  { username: 'diva', password: 'teste3' },
  { username: 'toni', password: 'teste4' }
]

def user_authenticate(username, password, list_users)
  list_users.each do |user|
    return user if user[:username] == username && user[:password] == password
  end
end

puts 'Welcome to the Authenticator'
25.times { print '-' }
puts
puts 'This program will take an input from the user and compare with the password'
puts 'If the password is correct, you will get back the user object'
puts 'Insert the username: '

# username = gets.chomp
# puts users.any? {|key, value| key === username}
# if users.any? {|key, value| key === username}
#   puts "User not in database"
# end

attemps = 1
while attemps < 4
  print 'Username: '
  username = gets.chomp
  print 'Password: '
  password = gets.chomp

  puts user_authenticate(username, password, users)

  puts 'Press n to quit or any other key to continue: '
  input = gets.chomp.downcase
  break if input == 'n'

  attempts += 1
end
