<script>
import axios from 'axios';

export default {
  data() {
    return {
      messageData: {
        name: '',
        email: '',
        message: '',
        accepted: false,
      },
    };
  },
  methods: {
    submitForm() {
  console.log("Submitting form");
  axios.post('http://127.0.0.1:8000/api/contacts', this.messageData)
    .then(response => {

      this.messageData = { name: '', email: '', message: '', accepted: false };

      const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      confirmationModal.show();
    })
    .catch(error => {
      if (error.response && error.response.data) {
        console.error("Dettagli errore:", error.response.data);
      } else {
        console.error("Errore nell'invio del messaggio:", error);
      }
    });
}
  }
};
</script>

<template>
    <div class="container p-3">
        <h2 class="text-primary py-3">Invia un Messaggio</h2>
        <form @submit.prevent="submitForm" class="w-75">
            <div class="mb-3">
                <label for="name" class="form-label">Nome:</label>
                <input id="name" v-model="messageData.name" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input id="email" v-model="messageData.email" type="email" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Messaggio:</label>
                <textarea id="message" v-model="messageData.message" class="form-control" required></textarea>
            </div>
            <div class="mb-3 form-check">
                <input id="accepted" type="checkbox" v-model="messageData.accepted" class="form-check-input" required>
                <label for="accepted" class="form-check-label">Accetto i <a href="#">Termini e Condizioni</a></label>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="!messageData.accepted">Invia Messaggio <i class="fa-solid fa-paper-plane"></i></button>
        </form>

        <!-- Modale di conferma -->
        <div class="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Messaggio Inviato</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Il tuo messaggio è stato inviato con successo!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Chiudi <i class="fa-solid fa-xmark"></i></button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>