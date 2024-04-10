import { CredentialInformation, GenericValue } from "./types";

export interface CredentialDataDecryptedObject {
	[key: string]: CredentialInformation;
}

export interface DataObject {
	[key: string]: GenericValue | DataObject | GenericValue[] | DataObject[];
}

export interface NodeCredentialsDetails {
	id: string | null;
	name: string;
}

export interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
}

export interface CredentialsDecrypted {
	id: string;
	name: string;
	type: string;
	data?: CredentialDataDecryptedObject;
	ownedBy?: User;
	sharedWith?: User[];
}
export interface CredentialsEncrypted {
	id?: string;
	name: string;
	type: string;
	data?: string;
}