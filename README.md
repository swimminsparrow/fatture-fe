# Fatturearuba

## Panoramica del Progetto

Il Sistema di Gestione delle Fatture è un'applicazione web sviluppata utilizzando Angular per il frontend e Django per il backend. Di seguito è riportata una suddivisione tecnica di questi aspetti:



### Frontend (Angular)

1. **Componenti**:
   - **Login**: Fornisce l'autenticazione dell'utente utilizzando OAuth 2.0.
   - **Dashboard**: Mostra un riepilogo delle fatture e collegamenti di navigazione.
   - **Elenco Fatture (ElencoFattureComponent)**: Elenca tutte le fatture, supporta il filtraggio e fornisce la navigazione ai dettagli di ogni singola fattura.
   - **Dettagli Fattura (DettaglioFatturaComponent)**: Visualizza informazioni dettagliate su una specifica fattura, compreso il file XML.
   - **Componente Aggiungi Fattura (AggiungiFatturaComponent)**: Consente agli utenti di creare nuove fatture.
2. **Autenticazione**:
   - OAuth 2.0 per l'autenticazione dell'utente.
   - In caso di autenticazione riuscita, viene ottenuto un token di accesso e memorizzato in modo sicuro (ai fini dell'esercizio esemplificato in localstorage).
3. **Integrazione Backend API**



### Backend (Django)

1. **OAuth 2.0**: Gestisce l'autenticazione dell'utente tramite OAuth 2.0, utilizzando **django-oauth-toolkit.**

2. **API delle Fatture**: Fornisce endpoint RESTful per la gestione delle fatture.

3. Abilitazione cross-origin

   

### Flusso di Lavoro

1. **Autenticazione Utente**:
   - Login form.
   - Il sistema utilizza OAuth 2.0 per convalidare in modo sicuro le credenziali dell'utente
   - Viene ottenuto un token di accesso al termine del login riuscito (ai fini dell'esercizio esemplificato in localstorage).
2. **Visualizzazione e Gestione delle Fatture**:
   - Elenco Fatture
   - Filtri
   - visualizzarne i dettagli Fattura.
   - Aggiungi Fattura.
3. **Dettagli Fattura e File XML**:
   - Il Componente Dettagli Fattura fornisce informazioni dettagliate sulle singole fatture.
   - Gli utenti possono scaricare il file XML associato a una fattura.
4. **Interazioni con le API**:
   - I componenti frontend effettuano chiamate API verso il backend per recuperare, creare, aggiornare o 	eliminare fatture.
   - Queste chiamate sono autenticate utilizzando i token di accesso ottenuti durante il login.
5. **Filtraggio e Aggiornamento**:
   - Gli utenti possono applicare 	filtri per cercare fatture specifiche in base a criteri come la 	data e il destinatario.
   - Il pulsante di Aggiornamento aggiorna l'elenco delle fatture 	per riflettere eventuali modifiche.

 
 
 

###  Autenticazione OAuth 2.0

Il Sistema di Gestione delle Fatture implementa l'autenticazione utilizzando il protocollo OAuth 2.0, che è uno standard aperto per l'autenticazione e l'autorizzazione. Di seguito una spiegazione di come funziona l'autenticazione OAuth 2.0 nel progetto:

1. **Registrazione dell'Applicazione**:
   - Per utilizzare OAuth 2.0, è 	necessario registrare l'applicazione sul lato del server OAuth (nel 	tuo caso, il backend Django).
   - Durante la registrazione, vengono 	generati un `CLIENT_ID` e un 	`CLIENT_SECRET`. Questi vengono 	utilizzati per identificare l'applicazione client e garantire la 	sicurezza delle comunicazioni.
2. **Flusso di Autorizzazione**:
   - Quando un utente tenta di 	accedere all'applicazione, viene reindirizzato alla pagina di 	login.
   - L'utente inserisce le proprie 	credenziali (username e password) nel Componente di Login.
3. **Richiesta di Token di Accesso**:
   - Una volta che l'utente ha fornito 	le credenziali corrette, il sistema effettua una richiesta al 	server OAuth per ottenere un `token di 	accesso`.
4. **Autenticazione del Client**:
   - La richiesta di token di accesso 	contiene l'`Authorization Header`, che 	include il `CLIENT_ID` e il 	`CLIENT_SECRET` generati durante la 	registrazione dell'applicazione.
   - Questa informazione è utilizzata 	per autenticare l'applicazione client presso il server OAuth.
5. **Generazione del Token di Accesso**:
   - Dopo aver autenticato 	l'applicazione client, il server OAuth genera un `token 	di accesso`.
   - Questo token di accesso è un 	token crittograficamente sicuro che rappresenta l'autenticazione 	dell'utente e concede l'accesso a risorse protette.
6. **Memorizzazione del Token di Accesso**:
   - Il token di accesso viene 	memorizzato in modo sicuro (ad esempio, in locale) dal frontend. 	Questo permette all'applicazione client di effettuare chiamate API 	successive senza richiedere nuovamente le credenziali dell'utente.
7. **Chiamate API con Token di Accesso**:
   - Ogni chiamata API successiva 	effettuata dall'applicazione client include il token di accesso 	nell'`Authorization Header`.
   - Il server OAuth verifica la 	validità del token di accesso per ogni richiesta e concede 	l'accesso solo se il token è valido.
8. **Scadenza del Token di Accesso**:
   - I token di accesso hanno una scadenza. Una volta scaduti, 	l'applicazione client deve ottenere un nuovo token di accesso 	attraverso il processo di autorizzazione.

 

### Backend (Django)

#### Prerequisiti

Prima di iniziare con il backend Django, assicurati di avere Python e pip installati sul tuo sistema.

#### Configurazione del Backend

1. **Clona il Codice Sorgente**: Assicurati di avere il codice sorgente del backend Django sul tuo sistema.
2. **Configura il Database (Opzionale)**: Se necessario, configura le impostazioni del database nel file `settings.py`.
3. **Migrazioni del Database**: Esegui le migrazioni del database con il seguente comando:

```bash
python manage.py migrate
```

**Avvio del Server Django**: Avvia il server Django con il seguente comando:

```
python manage.py runserver
```

Il tuo backend sarà disponibile all'indirizzo http://localhost:8000. 
 

### Frontend (Angular)

#### Prerequisiti

Prima di iniziare con il frontend Angular, assicurati di avere Node.js e npm installati sul tuo sistema.

#### Configurazione del Frontend

1. **Clona il Codice Sorgente**: Assicurati di avere il codice sorgente del frontend Angular sul tuo sistema.

2. **Installazione delle Dipendenze**: Esegui il seguente comando per installare le dipendenze del progetto:

   

```
npm install
```

**3. Avvio del Server di Sviluppo**: Avvia il server di sviluppo Angular con il seguente comando:



```bash
ng serve
```

Il tuo frontend sarà disponibile all'indirizzo http://localhost:4200.

### Accesso all'Applicazione

Dopo aver eseguito il backend e il frontend, apri il tuo browser e vai all'indirizzo http://localhost:4200 per accedere all'applicazione Sistema di Gestione delle Fatture. Sarai reindirizzato alla pagina di login, dove potrai inserire le tue credenziali.

Assicurati di aver configurato correttamente l'autenticazione OAuth 2.0 nel tuo backend Django e di aver registrato l'applicazione client per consentire l'accesso.

### Caso D'Uso

```bash
  .---------.               .---------.
  | Utente  |               |  [API]  |
  '---------'               '---------'
      |                         |
      | Effettua il login      |
      |------------------------>|
      |                         |
      |<-- Risponde con       |
      |    token OAuth        |
      |------------------------|
      |                         |
      | Visualizza elenco      |
      |   fatture              |
      |------------------------>|
      |                         |
      |<-- Restituisce         |
      |    elenco fatture     |
      |------------------------|
      |                         |
      | Visualizza dettaglio   |
      |   fattura              |
      |------------------------>|
      |                         |
      |<-- Restituisce dettaglio|
      |------------------------|
      |                         |
      | Aggiungi nuova        |
      |   fattura              |
      |------------------------>|
      |                         |
      |<-- Restituisce         |
      |    conferma            |
      |------------------------|
      |                         |
      | Aggiorna dati         |
      |   fattura              |
      |------------------------>|
      |                         |
      |<-- Restituisce         |
      |    conferma            |
      |------------------------|
      |                         |
      | Effettua il logout     |
      |------------------------>|

```



# Documentazione delle API per il Progetto di Fatturazione Elettronica

## Introduzione

Questo documento fornisce una panoramica delle API disponibili nel progetto di Fatturazione Elettronica. Le API consentono di interagire con il sistema per gestire le fatture e le notifiche.

## Risorsa "Fatture"

### Endpoint: `/api/invoices/`

- **GET**: Ottiene una lista di tutte le fatture attive nel sistema.
- **POST**: Crea una nuova fattura attiva.
- **Esempio di payload JSON per la creazione di una fattura:**

```json
{
    "invoice_number": 123,
    "issue_date": "2023-01-15",
    "due_date": "2023-02-15",
    "emitter_full_name": "Nome Emettitore",
    "destination_full_name": "Nome Destinatario",
    "total_amount": 100.0,
    "status": "Inviata",
    "sdi_identifier": "ABCD1234EFGH5678I"
}
```

### Endpoint: `/api/invoices/invoice_number//`

- **GET**: Ottiene i dettagli di una fattura specifica in base al suo numero di fattura.

### Endpoint: `/api/invoices/sdi_identifier//`

- **GET**: Ottiene i dettagli di una fattura specifica in base al suo identificativo SDI.

### Endpoint: `/api/invoices/sdi_identifier//status/`

- **GET**: Ottiene lo stato di una fattura specifica in base al suo identificativo SDI.

### Endpoint: `/api/invoices/xml/`

- **POST**: Crea una nuova fattura e restituisce l'XML corrispondente.

### Endpoint: `/api/invoices/xml/sdi_identifier//`

- **GET**: Ottiene l'XML di una fattura specifica in base al suo identificativo SDI.

## Risorsa "Notifiche"

### Endpoint: `/api/notifications/`

- **GET**: Ottiene una lista di tutte le notifiche nel sistema.

### Endpoint: `/api/notifications//`

- **GET**: Ottiene i dettagli di una notifica specifica in base al suo ID.

## Autenticazione

Le API utilizzano l'autenticazione OAuth2. Per accedere alle API, è necessario ottenere un token di accesso valido e includerlo nell'header "Authorization" di ogni richiesta.

## Esempi di Uso

### Ottieni una lista di fatture attive

**Richiesta:**

```
bash
GET /api/invoices/
```

**Header:**

```
makefile
Authorization: Bearer <your-access-token>
```

**Risposta:**

```
css
200 OK
[    {        "invoice_number": 123,        "issue_date": "2023-01-15",        "due_date": "2023-02-15",        "emitter_full_name": "Nome Emettitore",        "destination_full_name": "Nome Destinatario",        "total_amount": 100.0,        "status": "Inviata",        "sdi_identifier": "ABCD1234EFGH5678I"    },    {        ...    }]
```

### Crea una nuova fattura attiva

**Richiesta:**

```
bash
POST /api/invoices/
```

**Header:**

```
makefile
Authorization: Bearer <your-access-token>
```

**Payload JSON:**

```
json
{
    "invoice_number": 124,
    "issue_date": "2023-02-15",
    "due_date": "2023-03-15",
    "emitter_full_name": "Nuovo Nome Emettitore",
    "destination_full_name": "Nuovo Nome Destinatario",
    "total_amount": 150.0,
    "status": "Inviata",
    "sdi_identifier": "EFGH5678ABCD1234I"
}
```

**Risposta:**

```
json
201 Created
{
    "invoice_number": 124,
    "issue_date": "2023-02-15",
    "due_date": "2023-03-15",
    "emitter_full_name": "Nuovo Nome Emettitore",
    "destination_full_name": "Nuovo Nome Destinatario",
    "total_amount": 150.0,
    "status": "Inviata",
    "sdi_identifier": "EFGH5678ABCD1234I"
}
```

## Note Aggiuntive

- Per autenticarsi e ottenere un token di accesso, è possibile utilizzare il flusso OAuth2 con le credenziali appropriate.
- Assicurarsi di includere il token di accesso nell'header "Authorization" di ogni richiesta alle API.
- Per ulteriori dettagli sulle richieste e sulle risposte, consultare la documentazione specifica delle API.# fatture-be
