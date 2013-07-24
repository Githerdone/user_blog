enable :sessions

get '/' do
  @posts = Post.all
  erb :index
end

get '/login' do
  erb :login
end

post '/login' do
  p params
  user = User.login(params)
  if user
    session[:id] = user.id
    session[:email] = user.email
  else
    content_type :json
    { user: false }.to_json
  end
end


post '/new_user' do
  user = User.create(params)
  session[:id] = user.id
  session[:email] = user.email
  erb :index
end

get '/logout' do
  session.clear
  redirect '/'
end
