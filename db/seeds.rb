# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
note_params = [
  {
    language: "HTML/CSS",
    description: "Webサイトの画面を作るための言語"
  },
  {
    language: "JavaScript",
    description: "Webサイトの画面に動きをつけるための言語"
  },
  {
    language: "Ruby",
    description: "Webサイトの裏側の処理をする言語"
  },
  {
    language: "PHP",
    description: "Webサイトの裏側の処理をする言語"
  },
  {
    language: "Python",
    description: "人工知能を開発するための言語"
  }
]

Note.delete_all
Note.create!(note_params)
puts "初期データの投入に成功しました！"
