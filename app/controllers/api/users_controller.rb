class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show # TODO: FINDME THIS IS WHERE WE SET THE ROUTE. Update this to find_by :user_name ? 
    # updated route so params is now user_name instead of id . Probably won't break anything within users
    @user = User.find_by(id: params[:id])  # before we just used find
    # @user = User.find_by(user_name: params[:id]) # technically works but ugly
    # @user = User.find_by(user_name: params[:user_name])
    if @user
      render :show
    else
      render json: { :errors => "User cannot be found"}, :status => 404
    end
  end

  def update 
    # TODO: Make sure this only works on current_user
    @user = self.current_user # calls helper method from application controller.
    if @user.update_attributes(user_updatable_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password, :first_name, :last_name, :email) 
  end

  def user_updatable_params
    params.require(:user).permit(:first_name, :last_name,
      :location_city, :location_country, :about, :website,
      :instagram_username, :facebook_address, :twitter,
      :cov_p_fileUrl, :prof_p_fileUrl
    )
  end


end
