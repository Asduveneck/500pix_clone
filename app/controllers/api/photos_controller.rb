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
    debugger # turns out photo_params made it here...
    @photo = Photo.new(photo_params)
    debugger
    if @photo.save
      render :show   # Could also be the edit form right after too...
    else
      render json: @photo.errors.full_messages, status: 422 # :bad_request, but could be anything else too...
    end
  end
    
  def show
    @photo = Photo.find(params[:id])
    render :show
  end
  
  # def edit  # will we have this form?
  # end

  def update
    @photo = Photo.find(params[:id])
    # TODO: check if photo belongs to current user!
    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status:422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render json: @photo
  end


  private

  def photo_params
    params.require(:photo).permit(:title, :description, # user input
      :user_id, # from current user
      :views, :rating, # not user inputted
      :file # from file upload...
    )
  end

end
