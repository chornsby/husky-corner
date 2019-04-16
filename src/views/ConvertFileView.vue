<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Upload a file</h1>
      <p>
        This utility converts a file of text separated with
        <code>&lt;</code> characters into separate columns in an Excel
        spreadsheet.
      </p>
      <br>
      <div class="field">
        <label class="label">Text file</label>
        <div class="file has-name is-fullwidth">
          <label class="file-label">
            <input class="file-input" type="file" name="resume"
                   @change="handleFile($event)">
            <span class="file-cta">
                <span class="file-label">Choose a file</span>
              </span>
            <span class="file-name">{{ inputFilename }}</span>
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label">Excel filename</label>
        <div class="control">
          <input class="input" type="text" placeholder="Optional"
                 v-model="outputFilename">
        </div>
      </div>
      <div class="field">
        <label class="label">Episode</label>
        <div class="control">
          <input class="input" type="text" placeholder="Optional" v-model="episode"/>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary"
                  @click="handleDownload"
                  v-bind:disabled="!isDownloadReady">
            Download
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { convertToWorkbook, downloadWorkbook, readFileAsText } from "../utils";

export default {
  data: function() {
    return {
      episode: "",
      inputContent: "",
      inputFilename: "",
      outputFilename: "output.xlsx"
    };
  },
  computed: {
    isDownloadReady: function() {
      return Boolean(this.inputContent);
    }
  },
  methods: {
    handleDownload: function() {
      try {
        const outputWorkbook = convertToWorkbook(
          this.inputContent,
          this.episode
        );
        downloadWorkbook(outputWorkbook, this.outputFilename);
      } catch (e) {
        alert(e.message);
      }
    },
    handleFile: async function(event) {
      // Display the input filename beside the button
      const inputFile = event.target.files[0];
      this.inputFilename = inputFile.name;
      this.inputContent = await readFileAsText(inputFile);
    }
  }
};
</script>
