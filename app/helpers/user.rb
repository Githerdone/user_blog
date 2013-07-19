helpers do
  
  def current_user
    session[:id]
  end

  def user
    session[:email]
  end

end