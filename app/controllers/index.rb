enable :sessions

get '/' do
  @posts = Post.all
  p @posts
  erb :index
end

get '/login' do
  erb :login
end

post '/login' do
  user = User.login(params)
  session[:id] = user.id
  session[:email] = user.email
  redirect '/'
end

get '/create_account' do
  erb :create_account
end

post '/create_account' do
  user = User.create(params)
  session[:id] = user.id
  session[:email] = user.email
  redirect '/'
end

get '/logout' do
  session.clear
  redirect '/'
end