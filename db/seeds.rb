puts "Seeding Data ...."


def random_user
    User.all.sample.id
end


def random_priority
    random_array =
    [ 
        "High", "Medium", "Low"
    ]
end

def random_task
    Task.all.sample.id
end

def create_users(name)
    User.create(email: Faker::Internet.email, username: name + rand(1000).to_s,
    password_digest: Faker::Internet.password)
end


def create_tasks
    Task.create(title: Faker::Book.title, description: Faker::Hobby.activity, priority: random_priority, due: Faker::Number.between(from: 1, to: 30))
end

def create_spoon
    Spoon.create(spoon: Faker::Number.between(from: 1, to: 10), user_id: random_user, task_id: random_task)
end

3.times do |i|
    create_users(Faker::TvShows::Suits.character.gsub(/\s+/, ""))
    create_users(Faker::TvShows::DrWho.character.gsub(/\s+/, ""))
    create_users(Faker::TvShows::BreakingBad.character.gsub(/\s+/, ""))
end

20.times do |i|
   create_tasks() 
end

20.times do |i|
    create_spoon()
end

puts "Done!"
