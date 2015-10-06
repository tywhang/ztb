class UsersController < ApplicationController
  def create
    @user = User.new(create_params)
    if @user.save
      render json: @user, status: 200
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  private

  def create_params
    params.require(:user).permit(:name, :email)
  end
end
