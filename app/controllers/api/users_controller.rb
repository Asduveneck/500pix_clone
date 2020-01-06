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

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update 
    @user = self.current_user # calls helper method from application controller.
    if @user.update_attributes(user_updatable_params)
      remder :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password, :first_name, :last_name, :email) 
  end

  def user_updatable_params
    params.require(:user).permit(:first_name, :last_name, :location_city, :location_country, :about, :website, :instagram_username, :facebook_address, :twitter) 
  end


end
