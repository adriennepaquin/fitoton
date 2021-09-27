puts "destroying data"
Taken.destroy_all
Taken.reset_pk_sequence
Workout.destroy_all
Workout.reset_pk_sequence
Category.destroy_all
Category.reset_pk_sequence
Instructor.destroy_all
Instructor.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence

User.create!(name: "Adrienne", username: "apaquin", password_digest: "password")
User.create!(name: "Jeanne", username: "jeannemarie", password_digest: "password")
User.create!(name: "Paul", username: "papapaul", password_digest: "password")

puts "created #{User.count} users"

Instructor.create!(name: "Cody", gender: "male")
Instructor.create!(name: "Christine", gender: "female")
Instructor.create!(name: "Alex", gender: "male")
Instructor.create!(name: "Jess", gender: "female")
Instructor.create!(name: "Anna", gender: "female")


puts "created #{Instructor.count} instructors"

Category.create!(name: "Strength")
Category.create!(name: "Cycling")
Category.create!(name: "Yoga")
Category.create!(name: "Meditation")

puts "created #{Category.count} categories"

Workout.create!(name: "20 min Slow Flow", length: 20, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 3, instructor_id: 5)
Workout.create!(name: "15 min Low Impact Ride", length: 15, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 2, instructor_id: 2)
Workout.create!(name: "30 min Alicia Keys Full Body Strength", length: 30, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 1, instructor_id: 4)
Workout.create!(name: "45 min Power Zone Endurance Ride", length: 45, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 2, instructor_id: 2)
Workout.create!(name: "10 min Bodyweight Strength", length: 10, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 1, instructor_id: 4)
Workout.create!(name: "10 min Arms & Light Weights", length: 10, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 1, instructor_id: 3)

puts "created #{Workout.count} workouts"

Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..6))

puts "created #{Taken.count} takens"

puts "Done seeding!"