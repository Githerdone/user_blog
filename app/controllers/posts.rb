post '/create_post' do
  user = User.find(params[:id])
  post = user.posts.create(title: params[:title], body: params[:body])
  if params[:tags]
    post.tags.create(tag: params[:tags])
  end
  redirect '/'
end