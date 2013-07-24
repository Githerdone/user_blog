class User < ActiveRecord::Base
  include BCrypt
  has_many :posts
  
  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def self.create(params)
    @user = User.new(email: params[:email])
    @user.password = params[:password]
    @user.save!
    @user
  end

  def self.login(params)
    @user = User.find_by_email(params[:email])
    if @user
      @user if @user.password == params[:password]
    else
      false      
    end
  end
end
