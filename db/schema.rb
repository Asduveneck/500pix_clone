# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_06_231632) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "user_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "library_id"
    t.integer "follows_id"
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "location_city"
    t.string "location_country"
    t.text "about"
    t.string "website"
    t.string "instagram_username"
    t.string "facebook_address"
    t.string "twitter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.index ["follows_id"], name: "index_users_on_follows_id"
    t.index ["library_id"], name: "index_users_on_library_id"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["user_name"], name: "index_users_on_user_name", unique: true
  end

end
