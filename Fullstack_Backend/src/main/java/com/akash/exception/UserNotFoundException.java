package com.akash.exception;

public class UserNotFoundException extends RuntimeException {

	public UserNotFoundException(int id) {
		super("could not found the user with"+id);
	}

}
