export enum responseErrors {
  //Status Code: 400
  MISSING_REQUIRED_FIELD,
  MISSING_REQUIRED_HEADER,
  INVALID_FIELD,
  INVALID_HEADER,
  INVALID_DATE,
  INVALID_PAGE_SIZE,
  INVALID_VERSION,

  //Status Code: 403
  ADR_STATUS_NOT_ACTIVE,
  CONSENT_IS_REVOKED,
  CONSENT_IS_INVALID,

  //Status Code: 404
  RESOURCE_NOT_IMPLEMENTED,
  RESOURCE_NOT_FOUND,
  INVALID_RESOURCE,
  UNAVAILABLE_RESOURCE,
  INVALID_ENERGY_ACCOUNT,
  UNAVAILABLE_ENERGY_ACCOUNT,
  INVALID_SERVICE_POINT,
  UNAVAILABLE_SERVICE_POINT,

  //Status Code: 406
  UNSUPPORTED_VERSION,

  //Status Code: 422
  INVALID_CONSENT_ARRANGEMENT,
  INVALID_PAGE,
  UNPROCESSABLE_ENTITY_INVALID_ENERGY_ACCOUNT,
  UNPROCESSABLE_ENTITY_UNAVAILABLE_ENERGY,
  UNPROCESSABLE_ENTITY,
  UNPROCESSABLE_ENTITY_INVALID_SERVICE,
  UNPROCESSABLE_ENTITY_UNAVAILABLE_SERVICE,
}
