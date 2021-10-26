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

User.create!(name: "Adrienne", username: "apaquin", password: "password")
User.create!(name: "Jeanne", username: "jeannemarie", password: "password")
User.create!(name: "Paul", username: "papapaul", password: "password")

puts "created #{User.count} users"

Instructor.create!(name: "Cody", gender: "male", photo_url: "https://blog.onepeloton.com/wp-content/uploads/2017/06/cody-rigsby-e1499979192251.jpg")
Instructor.create!(name: "Christine", gender: "female", photo_url: "https://connectthewatts.com/wp-content/uploads/sites/11/2021/03/peloton-christine-dercole.jpg")
Instructor.create!(name: "Alex", gender: "male", photo_url: "https://www.golfchannel.com/sites/default/files/2020/05/01/toussaint_1920_bike_hands.jpg")
Instructor.create!(name: "Jess", gender: "female", photo_url: "https://blog.onepeloton.com/wp-content/uploads/2020/09/BB_TW.jpg")
Instructor.create!(name: "Anna", gender: "female", photo_url: "https://peloton.shorthandstories.com/7-ways-meditation-can-help-ease-anxiety--according-to-our-members/assets/L5QSNDJKAl/anna_meditation-anxiety_header-2560x1440.jpeg")


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
Workout.create!(name: "30 min Hip Hop Ride", length: 30, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 2, instructor_id: 3)
Workout.create!(name: "20 min 80s Rock Ride", length: 20, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 2, instructor_id: 2)
Workout.create!(name: "30 min Intervals & Arms Ride", length: 30, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 2, instructor_id: 1)
Workout.create!(name: "10 min Gratitude Meditation", length: 10, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 4, instructor_id: 5)
Workout.create!(name: "5 min Peace Meditation", length: 5, video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", category_id: 4, instructor_id: 1)


puts "created #{Workout.count} workouts"

Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))
Taken.create!(user_id: rand(1..3), workout_id: rand(1..11))


puts "created #{Taken.count} takens"

puts "Done seeding!"