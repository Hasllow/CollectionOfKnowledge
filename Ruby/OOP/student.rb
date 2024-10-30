require_relative '../modules/crud'
class Student
  include Crud
  attr_accessor :first_name, :last_name, :email, :username, :password

  def initialize(_firstname, _lastname, username, email, password)
    @first_name = _firstname
    @last_name = _lastname
    @username = username
    @email = email
    @password = password
  end

  def to_s
    "Fisrt Name: #{first_name}"
  end
end

gustavo = Student.new('Gustavo', 'Cassalho', 'hasllow', 'hasllow@gmail.com', 'teste')

puts gustavo
puts gustavo.first_name
puts gustavo.last_name
puts gustavo.create_hash_digest(gustavo.password)
