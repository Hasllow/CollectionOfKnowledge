dial_book = {
  'newyork' => '212',
  'newbrunswick' => '732',
  'edison' => '908',
  'plainsboro' => '609',
  'sanfrancisco' => '301',
  'miami' => '305',
  'paloalto' => '650',
  'evanston' => '847',
  'orlando' => '407',
  'lancaster' => '717'
}

# Get city names from the hash
def get_city_names(somehash)
  somehash.keys
end

# Get area code based on given hash and key
def get_area_code(somehash, key)
  somehash[key]
end

# Execution flow
loop do
  # Write your program execution code here
  print 'Want to choose? Y/N '
  input = gets.chomp.downcase
  break if input != 'y'

  puts 'Wich city do you want to lookup the area code?'
  puts get_city_names(dial_book)
  puts 'Enter your selection'
  prompt = gets.chomp

  if dial_book.include?(prompt)
    puts "The area code for #{prompt} is #{get_area_code(dial_book, prompt)}"
  else
    puts 'You entered an invalid city'
  end
end
