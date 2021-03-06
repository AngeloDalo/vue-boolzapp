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


  const app = new Vue(
    {
        el: '#app',
        data: {
            newMission: "",
            message: "", //messaggio che ho inserito io
            valueChat: 2, //utente con il quale sto messaggiando
            nameSearch: "",
            contacts: [
                {
                  name: "Michele",
                  avatar: "_1",
                  visible: true,
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
            if (this.message.length != 0) {
              let obj = {
                  date: "10/01/2020 16:50:00",
                  text: this.message,
                  status: "sent",
                  option: false,
                  visible: true,
              }
                  this.contacts[this.valueChat].messages.push(obj);
                  this.message = "";

                  let obj2 = {
                    date: "10/01/2020 16:50:00",
                    text: "ok",
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
            console.log(chat, numero);
            this.contacts[numero].messages.splice(chat, 1);
          }
        }
      });