# Simple REST API for DevHacks2022

## Schema

### Patient
```
{
  name: String
}
```

### Evaluator
```
{
  name: String
}
```

### Evaluation
```
{
  evaluator: Evaluator,
  patient: Patient,
  generalMood: Number,
  time: Date
}
```

### Situation
```
{
  evaluator: Evaluator,
  patient: Patient,
  type: String,
  label: String,
  time: Date
}
```

### Activity
```
{
  evaluator: Evaluator,
  patient: Patient,
  grade: Number,
  label: String,
  time: Date,
}
```

## Endpoints

The base URL for the api is `/api`.

### GET /evaluators

**Returns all evaluators**

```bash
curl --request GET \
  --url http://127.0.0.1:3000/api/evaluators \
  --header 'Content-Type: application/json'
```

### POST /evaluators

**Adds evaluator**

```bash
curl --request POST \
  --url http://127.0.0.1:3000/api/evaluators \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Teacher"
  }'
```

### GET /patients

**Returns all patients**

```bash
curl --request GET \
  --url http://127.0.0.1:3000/api/patients \
  --header 'Content-Type: application/json'
```

### POST /patients

**Adds patient**

```bash
curl --request POST \
  --url http://127.0.0.1:3000/api/patients \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Patient 1"
  }'
```

### GET /evaluations

**Returns all evaluations**

```bash
curl --request GET \
  --url http://127.0.0.1:3000/api/evaluations \
  --header 'Content-Type: application/json'
```

### POST /evaluations

**Adds evaluation**

```bash
curl --request POST \
  --url http://127.0.0.1:3000/api/evaluations \
  --header 'Content-Type: application/json' \
  --data '{
    "evaluator": "Teacher",
    "patient": "Patient 1",
    "generalMood": 5
  }'
```

### GET /situations

**Returns all situations**

```bash
curl --request GET \
  --url http://127.0.0.1:3000/api/situations \
  --header 'Content-Type: application/json'
```

### POST /situation

**Adds situation**

```bash
curl --request POST \
  --url http://127.0.0.1:3000/api/situations \
  --header 'Content-Type: application/json' \
  --data '{
    "evaluator": "Teacher",
    "patient": "Patient 1",
    "type": "bad",
    "label": "No eye contact"
  }'
```

### GET /activities

**Returns all activities**

```bash
curl --request GET \
  --url http://127.0.0.1:3000/api/activities \
  --header 'Content-Type: application/json'
```

### POST /activities

**Adds activity**

```bash
curl --request POST \
  --url http://127.0.0.1:3000/api/activities \
  --header 'Content-Type: application/json' \
  --data '{
    "evaluator": "Teacher",
    "patient": "Patient 1",
    "grade": 5,
    "label": "Washed his hands"
  }'
```