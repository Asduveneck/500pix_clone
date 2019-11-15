# FINDME CARLOS AND ALEX COMMENTED OUT SEEDS HERE

require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed ,nd (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  # Clear Tables:
  User.destroy_all 
  Photo.destroy_all

  # Seeds:

  # ================================= Users ==================================  
  demo   = User.create(user_name: 'guest',        password: '!Password', 
                      first_name: 'Guest',        last_name: 'User', 
                      email: 'demo_user@1000pix.com')
                      
  user1  = User.create(user_name: 'kbear',        password: 'baccano', 
                      first_name: 'Kara',         last_name: 'Chang', 
                      email: 'og@neopets.com')
                      
  user2	 = User.create(user_name:'realYoungJun',  password: '!youngjun', 
                      first_name: 'Phillip',        last_name: 'Zhang', 
                      email: 'realyj@yjfandom.org')
                      
  user3	 = User.create(user_name:'abyeet',        password: 'purplepenguin', 
                      first_name: 'Albert',         last_name: 'Yang', 
                      email: 'atyang@gmail.com')
                      
  user4	 = User.create(user_name: 'jrose',        password: 'password1', 
                      first_name: 'Jeremy',         last_name: 'Rofl', 
                      email: 'jrose@yahoo.com')
                      
  user5	 = User.create(user_name: 'jpham',        password: 'hunter12', 
                      first_name: 'James',        last_name: 'Phung', 
                      email: 'jpham@gmail.com')
                      
  user6	 = User.create(user_name: 'jbubba',       password: 'horse!staple2gun', 
                      first_name: 'Joseph',         last_name: 'Bubba', 
                      email: 'jbubba@gmail.com')
                      

  # ================================= Photos ==================================  
  # ----------------------------- Pre-AWS seeding -----------------------------
  photo1	 = Photo.create(title: 'Zion 1', description: '',	user_id: user1.id)
  # photo2	 = Photo.create(title: 'Zion 2', description: '',	user_id: user3.id)
  # photo3	 = Photo.create(title: 'angel landing',	description: 	'Scenic V w',	user_id: user2.id)
  # photo4	 = Photo.create(title: 'Zion chipmunk 1',	description: 	'Humanized chipmunk in Z n',	user_id: user4.id)
  # photo5	 = Photo.create(title: 'Zion chipmunk 2', description: '',	user_id: user5.id)
  # photo6	 = Photo.create(title: 'angel landing 2', description: '',	user_id: user2.id)
  # photo7	 = Photo.create(title: 'Bryce 1',	description: 	'Snowy Cany s',	user_id: user6.id)
  # photo8	 = Photo.create(title: 'Bryce 2',	description: '',	user_id: user4.id)
  # photo9	 = Photo.create(title: 'Bryce 3',	description: '',	user_id: user2.id)
  # photo10	 = Photo.create(title: 'preyes elk1',	description: '',	user_id: user3.id)
  # photo11	 = Photo.create(title: 'Fluffers',	description: '',	user_id: user1.id)
  # photo12	 = Photo.create(title: 'Demolished Sculpture', description: 'Now a parking lot',	user_id: user1.id)
  # photo13	 = Photo.create(title: 'hotel parrots',	description: '',	user_id: user1.id)
  # photo14	 = Photo.create(title: 'abstract 1', description: '',	user_id: user1.id)
  # photo15	 = Photo.create(title: 'abstract 2', description: '',	user_id: user2.id)
  # photo16	 = Photo.create(title: 'preyes elk2',	description: '',	user_id: user4.id)
  # photo17	 = Photo.create(title: 'Effie Yeaw b1',	description: '',	user_id: user3.id)
  # photo18	 = Photo.create(title: 'Effie Yeaw b2',	description: '',	user_id: user5.id)
  # photo19	 = Photo.create(title: 'Effie Yeaw b3',	description: '',	user_id: user6.id)
  # photo20	 = Photo.create(title: 'Effie Yeaw geese', description: '',	user_id: user2.id)
  # photo21	 = Photo.create(title: 'woodpecker 2', description: 'Beautiful woodpecker in Effie Yeaw',	user_id: user3.id)
  # photo22	 = Photo.create(title: 'woodpecker 1', description: '',	user_id: user5.id)
  # photo23	 = Photo.create(title: 'Davis sunflower 1',	description: 	'Sunflowers in sun t',	user_id: user6.id)
  # photo24	 = Photo.create(title: 'Davis sunflower 2',	description: '',	user_id: user4.id)
  # photo25	 = Photo.create(title: 'Davis sunflower 3',	description: '',	user_id: user1.id)
  # photo26	 = Photo.create(title: 'Davis sunflower 4',	description: '',	user_id: user2.id)
  # photo27	 = Photo.create(title: 'Davis sunflower 5',	description: '',	user_id: user5.id)
  # photo28	 = Photo.create(title: 'torr 1',	description: '',	user_id: user4.id)
  # photo29	 = Photo.create(title: 'Taiwan f1', description: 'The blue hour',	user_id: user6.id)
  # photo30	 = Photo.create(title: 'Taiwan port1',	description: '',	user_id: user4.id)
  # photo31	 = Photo.create(title: 'Taiwan port2', description: '',	user_id: user6.id)
  # photo32	 = Photo.create(title: 'Taiwan port3', description: '',	user_id: user5.id)
  # photo33	 = Photo.create(title: 'Taiwan port4', description: '',	user_id: user3.id)
  # photo34	 = Photo.create(title: 'Davis shadows',	description: '',	user_id: user1.id)
  # photo35	 = Photo.create(title: 'random trees', description: '',	user_id: user2.id)
  # photo36	 = Photo.create(title: 'squirrel 2', description: 'Squirrels in Davis',	user_id: user2.id)
  # photo37	 = Photo.create(title: 'squirrels 1',	description: '', user_id: user2.id)
  # # ---------------------------------- Files ----------------------------------

file1	   = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/zion_1.jpg')
# file2	   = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/zion_2.jpg')
# file3	   = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/angel_landing.jpg')
# file4	   = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/zion_chipmunk_1.jpg')
# file5	   = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/zion_chipmunk_2.jpg')
# file6	   = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/angel_landing_2.jpg')
# file7	   = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/bryce_1.jpg')
# file8	   = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/bryce_2.jpg')
# file9	   = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/bryce_3.jpg')
# file10	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/preyes_elk1.jpg')
# file11	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/fluffers.jpg')
# file12	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/demolished_sculpt.jpg')
# file13	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/hotel_parrots.jpg')
# file14	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/abstract_1.jpg')
# file15	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/abstract_2.jpg')
# file16	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/preyes_elk2.jpg')
# file17	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/eff_b1.jpg')
# file18	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/eff_b2.jpg')
# file19	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/eff_b3.jpg')
# file20	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/eff_geese.jpg')
# file21	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/woodpecker_2.jpg')
# file22	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/woodpecker_1.jpg')
# file23	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/dav_sunflower_1.jpg')
# file24	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/dav_sunflower_2.jpg')
# file25	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/dav_sunflower_3.jpg')
# file26	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/dav_sunflower_4.jpg')
# file27	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/dav_sunflower_5.jpg')
# file28	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/torr_1.jpg')
# file29	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/tai_f1.jpg')
# file30	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/tai_port1.jpg')
# file31	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/tai_port2.JPG')
# file32	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/tai_port3.JPG')
# file33	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/tai_port4.JPG')
# file34	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/dav_shadows.JPG')
# file35	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/random_trees.jpg')
# file36	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/squirrel_2.JPG')
# file37	 = open('https://1k-pix-seeds.s3-us-west-1.amazonaws.com/squirrels_1.JPG')

  # ------------------------ Connecting Photos to Files ------------------------

  photo1.file.attach(io:  file1,  filename: 'zion_1.jpg')
  # photo2.file.attach(io:  file2,  filename: 'zion_2.jpg')
  # photo3.file.attach(io:  file3,  filename: 'angel_landing.jpg')
  # photo4.file.attach(io:  file4,  filename: 'zion_chipmunk_1.jpg')
  # photo5.file.attach(io:  file5,  filename: 'zion_chipmunk_2.jpg')
  # photo6.file.attach(io:  file6,  filename: 'angel_landing_2.jpg')
  # photo7.file.attach(io:  file7,  filename: 'bryce_1.jpg')
  # photo8.file.attach(io:  file8,  filename: 'bryce_2.jpg')
  # photo9.file.attach(io:  file9,  filename: 'bryce_3.jpg')
  # photo10.file.attach(io: file10, filename: 'preyes_elk1.jpg')
  # photo11.file.attach(io: file11, filename: 'fluffers.jpg')
  # photo12.file.attach(io: file12, filename: 'demolished_sculpt.jpg')
  # photo13.file.attach(io: file13, filename: 'hotel_parrots.jpg')
  # photo14.file.attach(io: file14, filename: 'abstract_1.jpg')
  # photo15.file.attach(io: file15, filename: 'abstract_2.jpg')
  # photo16.file.attach(io: file16, filename: 'preyes_elk2.jpg')
  # photo17.file.attach(io: file17, filename: 'eff_b1.jpg')
  # photo18.file.attach(io: file18, filename: 'eff_b2.jpg')
  # photo19.file.attach(io: file19, filename: 'eff_b3.jpg')
  # photo20.file.attach(io: file20, filename: 'eff_geese.jpg')
  # photo21.file.attach(io: file21, filename: 'woodpecker_2.jpg')
  # photo22.file.attach(io: file22, filename: 'woodpecker_1.jpg')
  # photo23.file.attach(io: file23, filename: 'dav_sunflower_1.jpg')
  # photo24.file.attach(io: file24, filename: 'dav_sunflower_2.jpg')
  # photo25.file.attach(io: file25, filename: 'dav_sunflower_3.jpg')
  # photo26.file.attach(io: file26, filename: 'dav_sunflower_4.jpg')
  # photo27.file.attach(io: file27, filename: 'dav_sunflower_5.jpg')
  # photo28.file.attach(io: file28, filename: 'torr_1.jpg')
  # photo29.file.attach(io: file29, filename: 'tai_f1.jpg')
  # photo30.file.attach(io: file30, filename: 'tai_port1.jpg')
  # photo31.file.attach(io: file31, filename: 'tai_port2.JPG')
  # photo32.file.attach(io: file32, filename: 'tai_port3.JPG')
  # photo33.file.attach(io: file33, filename: 'tai_port4.JPG')
  # photo34.file.attach(io: file34, filename: 'dav_shadows.JPG')
  # photo35.file.attach(io: file35, filename: 'random_trees.jpg')
  # photo36.file.attach(io: file36, filename: 'squirrel_2.JPG')
  # photo37.file.attach(io: file37, filename: 'squirrels_1.JPG')

end