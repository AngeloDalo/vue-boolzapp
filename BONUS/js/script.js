/**
 * Milestone 1
 * Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore   * (bianco)   assegnando due classi CSS diverse
 * Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
 */

/**
 * Milestone 2
  Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
  Click sul contatto mostra la conversazione del contatto cliccato
 */

/**
 * Milestone 3
  Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
  Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
 */

/**
 * Milestone 4
  Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
 */
/**
 * Milestone 5
  Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
 */

/**
 * BONUS 1
 * evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi
 */

/**
 * BONUS 2
 * A) cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono. B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano
 */

/**
 * BONUS 3
 * predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
 */

/**
 * BONUS 4
 * visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto
 */

/**
 * BONUS 5
 * inserire l'orario corretto nei messaggi 
 */

/**
 * BONUS 6
 * sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto
 */

/**
 * BONUS 7
 * dare la possibilità all'utente di cancellare tutti i messaggi di un contatto o di cancellare l'intera chat con tutti i suoi dati: cliccando sull'icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci "Elimina messaggi" ed "Elimina chat"; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l'intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)
 */

/**
 * BONUS 8
 * aggiungere un'icona per cambiare la modalità light/dark
 */

/**
 * BONUS 9
 * //bonus cambiato. Problema nell'automatizzare comandi senza azioni
 * aggiungere una splash page visibile per 1s all'apertura dell'app
 */

/**
 * BONUS 10
 * aggiungere un'icona per ingrandire o rimpicciolire il font
 */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//prendo nel html ultimo accesso e lo cambio in sta scrivendo e online
//faccio return dell'orario dell'ultimo messaggio
//devo cambiare orario dell'utlimo accesso che sarà diverso dall'orario del messaggio
function getData(chat) {
  today = new Date();
  const elementDx = document.querySelector('.contact-text-date');
  const elementSx = document.querySelectorAll('.status-chat-sx');

  //istruzioni dopo che l'utente invia un messaggio randomico
  setTimeout(function(){ 
    elementDx.innerHTML = "sta scrivendo...";
    elementSx[chat].innerHTML = "sta scrivendo...";
  }, 0);
  setTimeout(function(){ 
    elementDx.innerHTML = "online";
    elementSx[chat].innerHTML = "online";
  }, 2000);
  setTimeout(function(){ 
    today = new Date();
    elementDx.innerHTML = "Ultimo accesso oggi alle " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + (today.getYear() + 1900) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    elementSx[chat].innerHTML = today.getDate() + "/" + (today.getMonth() + 1) + "/" + (today.getYear() + 1900) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  }, 8000);
  return today.getDate() + "/" + (today.getMonth() + 1) + "/" + (today.getYear() + 1900) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

const app = new Vue(
    {
        el: '#app',
        data: {
            newMission: "",
            message: "", //messaggio che ho inserito io
            valueChat: 0, //utente con il quale sto messaggiando
            nameSearch: "",
            splash: 1, //apertura e chiusura dell'app
            light: 1, //controllo modalità light o dark
            small: 0, //caratteri piccoli
            normal: 1, //caratteri medi
            big: 0, //caratteri grandi
            randomMessage: ["ok", "va bene", "non ti preoccupare", "anche a te e famiglia", "auguri", "usciamo?", "molto probabilmente", "buon Natale", "ti devo dire una cosa", "sto uscendo", "ci vediamo", "a dopo", "non sono a casa"],
            contacts: [
                {
                  name: "Michele",
                  avatar: "_1",
                  visible: true,
                  delate: false,
                  messages: [
                    {
                      visible: false, //messaggio "falso" per permettere eliminazione dell'ultimo messaggio dalla chat
                                      //questo messaggio comunque non verrò conteggiato
                    },
                    {
                      date: "10/01/2020 15:30:55",
                      text: "Hai portato a spasso il cane?",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      text: "Ricordati di dargli da mangiare",
                      status: "sent",
                      option: false,
                      visible: true,

                    },
                    {
                      date: "10/01/2020 16:15:22",
                      text: "Tutto fatto!",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                  ],
                },
                {
                  name: "Fabio",
                  avatar: "_2",
                  visible: true,
                  delate: false,
                  messages: [
                    {
                      visible: false,
                    },
                    {
                      date: "20/03/2020 16:30:00",
                      text: "Ciao come stai?",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "20/03/2020 16:30:55",
                      text: "Bene grazie! Stasera ci vediamo?",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "20/03/2020 16:35:00",
                      text: "Mi piacerebbe ma devo andare a fare la spesa.",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                  ],
                },
                {
                  name: "Samuele",
                  avatar: "_3",
                  visible: true,
                  delate: false,
                  messages: [
                    {
                      visible: false,
                    },
                    {
                      date: "28/03/2020 10:10:40",
                      text: "La Marianna va in campagna",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "28/03/2020 10:20:10",
                      text: "Sicuro di non aver sbagliato chat?",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "28/03/2020 16:15:22",
                      text: "Ah scusa!",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                  ],
                },
                {
                  name: "Luisa",
                  avatar: "_4",
                  visible: true,
                  delate: false,
                  messages: [
                    {
                      visible: false,
                    },
                    {
                      date: "10/01/2020 15:30:55",
                      text: "Lo sai che ha aperto una nuova pizzeria?",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      text: "Si, ma preferirei andare al cinema",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                  ],
                },
            ]
        },

        methods: {
          //vedere con quale utente sto messaggiando
          addChat: function(index) {
            this.valueChat = index;
          },

          //miei messaggi con risposta del pc
          newChat: function() {
            today = new Date();
            if (this.message.trim().length != 0) {
              //messaggio inviato
              let obj = {
                  date: today.getDate() + "/" + (today.getMonth() + 1) + "/" + (today.getYear() + 1900) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
                  text: this.message,
                  status: "sent",
                  option: false,
                  visible: true,
              }
                  this.contacts[this.valueChat].messages.push(obj);
                  this.message = "";

                  //messaggio randomico ricevuto
                  let obj2 = {
                    date: getData(this.valueChat), //devo generare sta scrivendo, online, ora messaggio e ultimo accesso
                    text: this.randomMessage[getRndInteger(0, this.randomMessage.length-1)],
                    status: "received",
                    option: false,
                    visible: true,
                  }
                  
                  setTimeout(()=>{ 
                    this.contacts[this.valueChat].messages.push(obj2);  
                  }, 1000);
            }
          },

          //ricerca in base al nome
          search: function (nameUser) {
            this.contacts.forEach (element => {
              if (element.name.toLowerCase().includes(nameUser)) {
                 element.visible = true;
              } else {
                 element.visible = false;
              }
             });
          },

          //vengono passati il numero della chat e il numero del messaggio
          //campo oprion diventa true quando freccia viene cliccata facendo vedere button 
          showOption: function (chat, numero) {
            if (this.contacts[numero].messages[chat].option == false) {
              this.contacts[numero].messages[chat].option = true;
            } else {
              this.contacts[numero].messages[chat].option = false;
            }
          },

          //eliminazione del messaggio selezionato
          delateMessage: function (chat, numero) {
            this.contacts[numero].messages.splice(chat, 1);
          },

          //mostra opzioni per eliminare messaggi o chat
          showDelateOption: function (valueChat) {
            if (this.contacts[valueChat].delate == false) {
              this.contacts[valueChat].delate = true;
            } else {
              this.contacts[valueChat].delate = false;
            }
          },

          //elimina tutti i messaggi di una specifica chat
          delateAllMessages: function (valueChat) {
            this.contacts[valueChat].messages.splice(1, this.contacts[valueChat].messages.length - 1);
          },

          //elimina intera chat
          delateChat: function (valueChat) {
            this.contacts.splice(valueChat, 1);
          },

          //modalità notte o giorno
          darkLight: function () {
            if (this.light == 1) {
              this.light = 0;
            } else {
              this.light = 1;
            }
          },

          //apertura e chiusura dell'app cambiando la variabile spash
          optionSplash: function  () {
            if (this.splash == 1) {
              setTimeout(()=>{ 
                this.splash = 0; 
              }, 1000);
            } else {
              setTimeout(()=>{ 
                this.splash = 1; 
              }, 1000);
            }
          },

          smallText: function () {
            this.small = 1;
            this.normal = 0;
            this.big = 0;
          },

          mediumText: function () {
            this.small = 0;
            this.normal = 1;
            this.big = 0;
          },

          bigText: function () {
            this.small = 0;
            this.normal = 0;
            this.big = 1;
          }
        }
      });