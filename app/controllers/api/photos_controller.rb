class Api::PhotosController < ApplicationController
  
  def index
    @photos = Photo.all
    render :index # we want infinite scroll so probably not yet...
  end
    
  def new # form to get or post a photo
    @photo = Photo.new
    render :new
  end

  def create
    @photo = Photo.new (photo_params)
    if @photo.save
      render :show   # Could also be the edit form right after too...
    else
      render json: @photo.full_messages, status: 400 # :bad_request, but could be anything else too...
    end
  end
    
  def show
    @ohoto = Photo.find(params[:id])
    render :show
  end
  
  def edit 
  end 

  def update 
  end

  def destroy 
  end


  private

  def photo_params
    params.require(:photo).permit(:title, :description, # user input
      :user_id, # from current user
      :views, :rating # not user inputted
    )
  end

end
