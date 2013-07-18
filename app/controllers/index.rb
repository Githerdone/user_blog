get '/' do
  @posts = Post.all
  erb :index
end

get '/login' do

end

get '/create_account' do
end
