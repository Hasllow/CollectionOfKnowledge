puts "Hello World"

greeting = "Hello World"

puts greeting

def say_hello(thing_to_say)
    puts thing_to_say
end

say_hello "Teste"


### STRINGS 

first_name = "Gustavo"
last_name = "Cassalho"

puts "My name is #{first_name} #{last_name}"
puts 'My name is #{first_name} #{last_name}'

# puts "What's your first name?"
# first_name = gets.chomp
# puts "Hello #{first_name}"

# puts "Give a number to multiply by 2"
# input = gets.chomp
# puts input.to_i * 2


# puts "Enter first name"
# f_name = gets.chomp
# puts "Enter last name"
# l_name = gets.chomp
# full_name = "#{f_name} #{l_name}"

# puts "Your full name is #{full_name}"
# puts "Your full name reversed is #{full_name.reverse}"
# puts "Your full name has #{f_name.length + l_name.length} characters in it"

puts "I am a line"
puts "-" * 20
20.times {print "-"}

puts "Simple calculator"
25.times {print "-"}
puts 
puts "Enter the first number:"
first_number = gets.chomp
puts "Enter the second number:"
second_number = gets.chomp
puts "The first number * the second number is #{first_number.to_f * second_number.to_f}"
puts "The first number + the second number is #{first_number.to_f + second_number.to_f}"
puts "The first number - the second number is #{first_number.to_f - second_number.to_f}"
puts "The first number / the second number is #{first_number.to_f / second_number.to_f}"
puts "The first number % the second number is #{first_number.to_f % second_number.to_f}"