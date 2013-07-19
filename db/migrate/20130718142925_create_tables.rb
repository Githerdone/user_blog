class CreateTables < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_hash
    end

    create_table :posts do |t|
      t.string :title
      t.string :body
      t.belongs_to :user
    end

    create_table :tags do |t|
      t.string :tag
    end

    create_table :posts_tags do |t|
      t.belongs_to :tag
      t.belongs_to :post
    end
  end
end
