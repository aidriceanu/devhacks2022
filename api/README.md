# Simple REST API for DevHacks2022

## Models

### Patient
```
{
  client: String,
  action: String,
  resource: String,
  time: Date,
}
```

## Endpoints

The base URL for the api is `/api`.

### GET /patients

Returns all patients.

```bash
curl --request GET \
  --url http://127.0.0.1:3000/api/patients \
  --header 'Content-Type: application/json'
```

### POST /patients

Adds patient.

```bash
curl --request POST \
  --url http://127.0.0.1:3000/api/patients \
  --header 'Content-Type: application/json' \
  --data '{
    "client": "ASD0",
    "action": "First Consult",
    "resource": "Teacher"
  }'
```