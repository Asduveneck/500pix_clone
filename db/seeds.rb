# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord:: Base.transaction do

  # Clear Tables:
  User.destroy_all 


  # Seeds:
  demo = User.create(user_name: 'guest', password: '!Password', first_name: 'Guest', last_name: 'User', email: 'demo_user@1000pix.com' )

end