'use strict';

import express from 'express';
import swaggerUi from 'swagger-ui-express'
const PORT = 8080;
const HOST = '0.0.0.0';
let sw = {
  openapi: '3.0.1',
  info: {
      version: '1.0.0',
      title: 'fine_ccm_app',
      description: 'Fine L.L.C App to calculate ccm for products',
      termsOfService: '',
      contact: {
          name: 'Omar khaddam aljamaa',
          email: 'khadamaljyomar@gmail.com',
      },
  },
  tags: [
      {
          name: 'ccm'
      }
  ],
  paths: {
      "/": {
          "post": {
            "requestBody": {
              "content": {
                "application/x-www-form-urlencoded": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "w": { 
                        "description": "box width",
                        "type": "number"
                      },
                      "l": { 
                        "description": "box length",
                        "type": "number"
                      },
                      "h": {
                        "description": "box height",
                        "type": "number"
                      }
                    },
                    "required": ["w", "l", "h"] 
                  }
                }
              }
            },
            tags: ['ccm'],
            description: "Calculate ccm based on width, height, length",
            operationId: 'calcualteCCM',
            security: [
                {
                    bearerAuth: []
                }
            ],
            responses: {
                "200": {          
                    description: "the box size",
                    "content": {
                        "application/json": {
                            schema: {
                                type: "number",
                                example: 3.22
                            }
                        }
                    }
                }
            }
        } 
      }
  }
}
// App
const app = express();
app.post('/', (req, res) => {
  const width = req.body.w
  const height = req.body.h
  const length = req.body.l

  res.send(width*height*length);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(sw))

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);