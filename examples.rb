# Write a method that prints out the numbers 1 to 1000 that are divisible by 3.

def print_numbers_divisible_by_three
  index = 1
  while index <= 1000
    if index % 3 == 0
      puts index
    end
    index += 1
  end
end
print_numbers_divisible_by_three






# Write a method that accepts an array of strings and prints out every other string.

# def print_every_other_item(strings)
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       puts string
#     end
#     index += 1
#   end
# end
# print_every_other_item(["a", "b", "c", "d", "e"])





# Write a method that accepts an array of numbers and returns the sum.

# def compute_sum(numbers)
#   sum = 0
#   numbers.each do |number|
#     sum += number
#   end
#   return sum
# end

# puts compute_sum([2, 4, 5])




# # Start with the hash: city_populations = {chi: 2700000}
# # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}

# city_populations = {chi: 2700000}
# city_populations[:nyc] = 8400000
# city_populations[:sf] = 800000
# p city_populations


array = []
array << "sam"
array << "bill"
p array # ["sam", "bill"]