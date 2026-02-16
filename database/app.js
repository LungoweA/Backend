import 'dotenv/config'
import databaseService from "./src/service/DatabaseService.js"
import { app } from './src/express.js'


// Connect to the database
await databaseService.connect()

// To start the express server
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
