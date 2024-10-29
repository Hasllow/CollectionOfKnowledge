puts "Hello World"

greeting = "Hello World"

puts greeting

def say_hello(thing_to_say)
    puts thing_to_say
end

say_hello "Teste"


### STRINGS 

# first_name = "Gustavo"
# last_name = "Cassalho"

# puts "My name is #{first_name} #{last_name}"
# puts 'My name is #{first_name} #{last_name}'

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

# puts "I am a line"
# puts "-" * 20
# 20.times {print "-"}

# def multiply(first_num, second_num)
#     first_num.to_f * second_num.to_f
# end
# def divide(first_num, second_num)
#     first_num.to_f / second_num.to_f
# end
# def sum(first_num, second_num)
#     first_num.to_f + second_num.to_f
# end
# def subtract(first_num, second_num)
#     first_num.to_f - second_num.to_f
# end

# def mod(first_num, second_num)
#     first_num.to_f % second_num.to_f
# end

### IFS

# puts "Simple calculator"
# 25.times {print "-"}
# puts 
# puts "Enter the first number:"
# first_number = gets.chomp
# puts "Enter the second number:"
# second_number = gets.chomp
# puts "What do you want to do?"
# puts "Enter 1 for multiply, 2 for division, 3 for sum, 4 for subtract, 5 for mod: "
# choice = gets.chomp

# if choice == "1"
#     puts "You chose multiply"
#     puts multiply(first_number, second_number)
# elsif choice == "2"
#     puts "You chose division"
#     puts divide(first_number, second_number)
# elsif choice == "3"
#     puts "You chose sum"
#     puts sum(first_number, second_number)
# elsif choice == "4"
#     puts "You chose subtraction"
#     puts subtract(first_number, second_number)
# elsif choice == "5"
#     puts "You chose mod"
#     puts mod(first_number, second_number)
# else
#     puts "Invalid option"
# end

# puts "The first number * the second number is #{multiply(first_number, second_number)}"
# puts "The first number + the second number is #{sum(first_number, second_number)}"
# puts "The first number - the second number is #{subtract(first_number, second_number)}"
# puts "The first number / the second number is #{divide(first_number, second_number)}"
# puts "The first number % the second number is #{mod(first_number, second_number)}"

### ARRAYS
a = [1,2,3,4,5,6,7,8,9]
puts a
print a
p a

### HASH - DICTIONARY
sample_hash = { 'a' => 1, 'b' => 2, 'c' => 3 }
my_details = { 'name' => 'gustavo', 'favcolor' => 'gray' }
my_details['favcolor']
my_hash = { a: 1, b: 2, c: 3 }
puts my_hash
my_hash.each { |key, value| puts "The key is #{key} and the value is #{value}" }