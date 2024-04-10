import { Node } from "reactflow";
import { DataObject } from "./interfaces";

export type CredentialInformation = string | number | boolean | DataObject | DataObject[];
 
export type GenericValue = string | object | number | boolean | undefined | null;

export type NodeAutomates = {
    value: JsonObject; 
} & Node;

export type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];

export type JsonObject = { [key: string]: JsonValue };