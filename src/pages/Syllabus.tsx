import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { AlertTriangle, BookOpen, ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Lab = { title: string; labUrl: string; solutionUrl: string };
type BadgeCard = { title: string; courseUrl: string; solutionsUrl: string; labs: Lab[] };

// Each card is now defined separately so you can easily edit titles and labs per card
const skillBadges: BadgeCard[] = [
  {
    title: "The Basics of Google Cloud Compute: Challenge Lab",
    courseUrl: "https://www.skills.google/course_templates/754?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "Creating a Virtual Machine", labUrl: "https://www.skills.google/course_templates/754/labs/584200", solutionUrl: "https://youtu.be/UnfDTYpP4Ws?si=NvN83DP0X8dLkMj1" },
      { title: "Creating a Persistent Disk", labUrl: "https://www.skills.google/course_templates/754/labs/584201", solutionUrl: "https://youtu.be/cYz3thR_Ds8?si=GmZ2YEo4Z-ZKCxY1" },
      { title: "Hosting a Web App on Google Cloud using Compute Engine", labUrl: "https://www.skills.google/course_templates/754/labs/584202", solutionUrl: "https://youtu.be/xCN4_jEAlhQ?si=3l7wjC2_Ik-Ukfl7" },
      { title: " The Basics of Google Cloud Compute: Challenge Lab", labUrl: "https://www.skills.google/course_templates/754/labs/584203", solutionUrl: "https://youtu.be/lfPE9wgNcoE?si=KAFk3Nn3gZsN-QvG" },
    ],
  },
  {
    title: "Get Started with Cloud Storage",
    courseUrl: "https://www.skills.google/course_templates/725?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "APIs Explorer: Cloud Storage", labUrl: "https://www.skills.google/course_templates/725/labs/589886", solutionUrl: "https://youtu.be/2ZZMyGQoqgI?si=Fl3DgYG0TPgL9Z-l" },
      { title: "Cloud Storage: Qwik Start - CLI/SDK", labUrl: "https://www.skills.google/course_templates/725/labs/589887", solutionUrl: "https://youtu.be/9TxP5iJX4Y4?si=csBh2ucMEH6-8FoG" },
      { title: "Google Cloud Storage - Bucket Lock", labUrl: "https://www.skills.google/course_templates/725/labs/589888", solutionUrl: "https://youtu.be/qzXnfiTVsJg?si=DzsRzUopa3S1Y26f" },
      { title: "Get Started with Cloud Storage: Challenge Lab", labUrl: "https://www.skills.google/course_templates/725/labs/589889", solutionUrl: "https://youtu.be/NLfLLMKPGb0?si=dNNVLaVvGGi5d_Kc" },
    ],
  },
  {
    title: "Get Started with Pub/Sub",
    courseUrl: "https://www.skills.google/course_templates/728?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "Pub/Sub: Qwik Start - Console", labUrl: "https://www.skills.google/course_templates/728/labs/594563", solutionUrl: "https://youtu.be/r8pnC0kwt-8?si=8awcCMRvVEGd--Ru" },
      { title: "Cloud Scheduler: Qwik Start", labUrl: "https://www.skills.google/course_templates/728/labs/594564", solutionUrl: "https://youtu.be/wEBWC3bnY6E?si=Z5WP1Xu9xOTkJ2CW" },
      { title: "Get Started with Pub/Sub: Challenge Lab", labUrl: "https://www.skills.google/course_templates/728/labs/594565", solutionUrl: "https://youtu.be/j7xz9e5mn8I?si=17uZC3LeOLc6XQyS" },
    ],
  },
  {
    title: "Get Started with API Gateway",
    courseUrl: "https://www.skills.google/course_templates/662?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "API Gateway: Qwik Start", labUrl: "https://www.skills.google/course_templates/662/labs/592574", solutionUrl: "https://youtu.be/YD2K_jKafl8?si=n1eUnk01l-yRmNay" },
      { title: "Pub/Sub: Qwik Start - Console", labUrl: "https://www.skills.google/course_templates/662/labs/592575", solutionUrl: "https://youtu.be/r8pnC0kwt-8?si=8awcCMRvVEGd--Ru" },
      { title: "Cloud Functions Qwik Start - Console", labUrl: "https://www.skills.google/course_templates/662/labs/592576", solutionUrl: "https://youtu.be/CMc53r2plTU?si=fq_ok86rt3JIwwrw" },
      { title: "Getting Started with API Gateway: Challenge Lab", labUrl: "https://www.skills.google/course_templates/662/labs/592577", solutionUrl: "https://youtu.be/ge8Q-8l0A3c?si=cK81ue0kNW8ohCg6" },
    ],
  },
  {
    title: "Get Started with Looker",
    courseUrl: "https://www.skills.google/course_templates/647?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "Looker Studio: Qwik Start", labUrl: "https://www.skills.google/course_templates/647/labs/591374", solutionUrl: "https://youtu.be/H93zOjZmaVo?si=Hwkpgy6JEF5McV-h" },
      { title: "Looker Data Explorer - Qwik Start", labUrl: "https://www.skills.google/course_templates/647/labs/591375", solutionUrl: "https://youtu.be/ghcGnogsvGw?si=o6ug0IdwP9ceQsH-" },
      { title: "Looker Developer: Qwik Start", labUrl: "https://www.skills.google/course_templates/647/labs/591376", solutionUrl: "https://youtu.be/s7DT_t-ou_A?si=7XYr-AEAD4TL5KTR" },
      { title: "Get Started with Looker: Challenge Lab", labUrl: "https://www.skills.google/course_templates/647/labs/591377", solutionUrl: "https://youtu.be/lUwgzgAAw58?si=rcsy-V97iO7FE4l5" },
    ],
  },
  {
    title: "Get Started with Dataplex",
    courseUrl: "https://www.skills.google/course_templates/726?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "Dataplex: Qwik Start - Console", labUrl: "https://www.skills.google/course_templates/726/labs/595708", solutionUrl: "https://youtu.be/mcfanTzb3SA?si=HSjpWMPFJsvr76JL" },
      { title: "Dataplex: Qwik Start - Command Line", labUrl: "https://www.skills.google/course_templates/726/labs/595709", solutionUrl: "https://youtu.be/JqtWjJ7A3R8?si=E8jvQaovwgIdswq_" },
      { title: "Create and Add Aspects to Dataplex Assets", labUrl: "https://www.skills.google/course_templates/726/labs/595710", solutionUrl: "https://youtu.be/oKm8Oz6jpRE?si=3v_Ukj0jFXthAznK" },
      { title: "Get Started with Dataplex: Challenge Lab", labUrl: "https://www.skills.google/course_templates/726/labs/595711", solutionUrl: "https://youtu.be/s9sOxVfOdFk?si=P0XpRx6euIFO_0UV" },
    ],
  },
  {
    title: "Get Started with Google Workspace Tools",
    courseUrl: "https://www.skills.google/course_templates/676?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "Level up your Google Workspace knowledge", labUrl: "https://www.skills.google/course_templates/676/video/594923", solutionUrl: "https://www.skills.google/course_templates/676/video/594923" },
      { title: "Gmail: Getting Started", labUrl: "https://www.skills.google/course_templates/676/labs/594924", solutionUrl: "https://youtu.be/tEnaz69Yl-g?si=HDA1-RL-DP_WCHRN" },
      { title: "Google Calendar: Getting Started", labUrl: "https://www.skills.google/course_templates/676/labs/594925", solutionUrl: "https://youtu.be/9E-WwwWXPFg?si=7Va--TdzSnEpMCpL" },
      { title: "Google Meet: Getting Started", labUrl: "https://www.skills.google/course_templates/676/labs/594926", solutionUrl: "https://youtu.be/0xm6pFbRljs?si=aldE6el3DKshb9dm" },
      { title: "Google Drive: Getting Started", labUrl: "https://www.skills.google/course_templates/676/labs/594927", solutionUrl: "https://youtu.be/eZLJcJXuMqA?si=wbMwskNKvXeRYNFT" },
      { title: "Google Sheets: Getting Started", labUrl: "https://www.skills.google/course_templates/676/labs/594928", solutionUrl: "https://youtu.be/jD1C7GYscok?si=7K_gayjZZCwJvgQW" },
      { title: "Google AppSheet: Getting Started", labUrl: "https://www.skills.google/course_templates/676/labs/594929", solutionUrl: "https://youtu.be/aCCeL8CZK3g?si=aDBYgV-PpTXRrfvN" },
      { title: "Get Started with Google Workspace Tools: Challenge Lab", labUrl: "https://www.skills.google/course_templates/676/labs/594930", solutionUrl: "https://youtu.be/l8SaVnP1KlM?si=IGRmb6PeA-bP9Xv4" },
    ],
  },
  {
    title: "App Building with AppSheet",
    courseUrl: "https://www.skills.google/course_templates/635",
    solutionsUrl: "#",
    labs: [
      { title: "Google AppSheet: Getting Started", labUrl: "https://www.skills.google/course_templates/635/labs/586897", solutionUrl: "https://youtu.be/aCCeL8CZK3g?si=S7iIzNqJbDR9FhSo" },
      { title: "Connect and Configure Data for your AppSheet App", labUrl: "https://www.skills.google/course_templates/635/labs/586898", solutionUrl: "https://youtu.be/XpPyfnvzjD4?si=Z7GLgOb5o-A4Dq6H" },
      { title: "Publish your AppSheet App", labUrl: "https://www.skills.google/course_templates/635/labs/586899", solutionUrl: "https://youtu.be/SQXAjjBPn3A?si=XZ_ZHcI0dlAx1jEX" },
      { title: "App Building with AppSheet: Challenge Lab", labUrl: "https://www.skills.google/course_templates/635/labs/586900", solutionUrl: "https://youtu.be/rp0Oz-x9Mc8?si=s17_r7JmULGhdVzL" },
    ],
  },
  {
    title: "Develop with Apps Script and AppSheet",
    courseUrl: "https://www.skills.google/course_templates/715",
    solutionsUrl: "#",
    labs: [
      { title: "Develop No-Code Chat Apps with AppSheet", labUrl: "https://www.skills.google/course_templates/715/labs/591610", solutionUrl: "https://youtu.be/O2IUvuWqnjs?si=D0ICQ0xFZmfXMk3Y" },
      { title: "Introduction to Google Chat Bots with Apps Script", labUrl: "https://www.skills.google/course_templates/715/labs/591611", solutionUrl: "https://youtu.be/cx_PQjfUmQk?si=Rm04mDCB_A6pV0-T" },
      { title: "Google Apps Script: Access Google Sheets, Maps & Gmail in 4 Lines of Code", labUrl: "https://www.skills.google/course_templates/715/labs/591612", solutionUrl: "https://youtu.be/afvGRQGdDjg?si=Mq_1Y-dFwY9Dr-yy" },
      { title: "Develop with Apps Script and AppSheet: Challenge Lab", labUrl: "https://www.skills.google/course_templates/715/labs/591613", solutionUrl: "https://youtu.be/0VQFSGyKC2U?si=_N-lhF1sT-wITfwr" },
    ],
  },
  {
    title: "Build a Website on Google Cloud",
    courseUrl: "https://www.skills.google/course_templates/638",
    solutionsUrl: "#",
    labs: [
      { title: "Deploy Your Website on Cloud Run", labUrl: "https://www.skills.google/course_templates/638/labs/592820", solutionUrl: "https://youtu.be/ETRUXH5602U?si=hp9cv3wEZo0DMlm4" },
      { title: "Hosting a Web App on Google Cloud using Compute Engine (video)", labUrl: "https://www.skills.google/course_templates/638/video/592821", solutionUrl: "https://youtu.be/xCN4_jEAlhQ?si=iqAW08ntIlUFb7tv" },
      { title: "Host a Web App on Google Cloud Using Compute Engine", labUrl: "https://www.skills.google/course_templates/638/labs/592822", solutionUrl: "https://youtu.be/xCN4_jEAlhQ?si=iqAW08ntIlUFb7tv" },
      { title: "Deploy, Scale, and Update Your Website on Google Kubernetes Engine", labUrl: "https://www.skills.google/course_templates/638/labs/592823", solutionUrl: "https://youtu.be/bUt8Pzj2Gd0?si=eGkiK7CxEg0xR5Dp" },
      { title: "Migrating a Monolithic Website to Microservices on Google Kubernetes Engine", labUrl: "https://www.skills.google/course_templates/638/labs/592824", solutionUrl: "https://youtu.be/36WC7jipPIo?si=c6oPyNXtRqIC7ulU" },
      { title: "Case Study: Hosting Scalable web apps on Google Cloud", labUrl: "https://www.skills.google/course_templates/638/video/592825", solutionUrl: "https://www.skills.google/course_templates/638/video/592825" },
      { title: "Build a Website on Google Cloud: Challenge Lab", labUrl: "https://www.skills.google/course_templates/638/labs/592826", solutionUrl: "https://youtu.be/VwahQGNteJw?si=LBRpXLDk1oIoZTx0" },
    ],
  },
  {
    title: "Set Up a Google Cloud Network",
    courseUrl: "https://www.skills.google/course_templates/641",
    solutionsUrl: "#",
    labs: [
      { title: "Networking 101", labUrl: "https://www.skills.google/course_templates/641/labs/594566", solutionUrl: "https://youtu.be/7ND6JrHtFkQ?si=yvAzu_tKDniP1Z35" },
      { title: "Create a Custom Network and Apply Firewall Rules", labUrl: "https://www.skills.google/course_templates/641/labs/594567  ", solutionUrl: "https://youtu.be/TUs0BfnszAA?si=R4DtPG6XEoeNl978" },
      { title: "Test Network Latency Between VMs", labUrl: "https://www.skills.google/course_templates/641/labs/594568", solutionUrl: "https://youtu.be/BmF8xmklAxA?si=e2Van3IJHw8Cxh2-" },
      { title: "Set Up a Google Cloud Network: Challenge Lab", labUrl: "https://www.skills.google/course_templates/641/labs/594569", solutionUrl: "https://youtu.be/EVKnsDD1ZAM?si=JPgD69aGVokngNbs" },
    ],
  },
  {
    title: "Store, Process, and Manage Data on Google Cloud - Console",
    courseUrl: "https://www.skills.google/course_templates/658",
    solutionsUrl: "#",
    labs: [
      { title: "Cloud Storage: Qwik Start - Cloud Console", labUrl: "https://www.skills.google/course_templates/658/labs/595717", solutionUrl: "https://youtu.be/4lg2rUflNZQ?si=jN5iulc8Il8XpA5d" },
      { title: "Cloud Run Functions: Qwik Start - Console", labUrl: "https://www.skills.google/course_templates/658/labs/595718", solutionUrl: "https://youtu.be/CMc53r2plTU?si=PfTolZrSRRbw20DV" },
      { title: "Pub/Sub: Qwik Start - Console", labUrl: "https://www.skills.google/course_templates/658/labs/595719", solutionUrl: "https://youtu.be/r8pnC0kwt-8?si=8awcCMRvVEGd--Ru" },
      { title: "Store, Process, and Manage Data on Google Cloud: Challenge Lab", labUrl: "https://www.skills.google/course_templates/658/labs/595720", solutionUrl: "https://youtu.be/fRMJI5ATs2s?si=wD58rzltG92foZvU" },
    ],
  },
  {
    title: "Cloud Run Functions: 3 Ways",
    courseUrl: "https://www.skills.google/course_templates/696?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "Cloud Run Functions: Qwik Start - Console", labUrl: "https://www.skills.google/course_templates/696/labs/588174", solutionUrl: "https://youtu.be/CMc53r2plTU?si=JigzPBCIFgbuoQ0y" },
      { title: "Cloud Run Functions: Qwik Start - Command Line", labUrl: "https://www.skills.google/course_templates/696/labs/588175", solutionUrl: "https://youtu.be/ELxf5u4ALd8?si=zIfJFRCYqrLVfzOZ" },
      { title: "Cloud Run Functions: Qwik Start", labUrl: "https://www.skills.google/course_templates/696/labs/588176", solutionUrl: "https://youtu.be/Yf3LgNaV9gg?si=FhZaTW5Q6ne7jk4l" },
      { title: "Cloud Run Functions: 3 Ways: Challenge Lab", labUrl: "https://www.skills.google/course_templates/696/labs/588177", solutionUrl: "https://youtu.be/SQEMdrLIpXM?si=zteJiC2uP0mrQ3Vn" },
    ],
  },
  {
    title: "App Engine: 3 Ways",
    courseUrl: "https://www.skills.google/course_templates/671?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "App Engine: Qwik Start - Python", labUrl: "https://www.skills.google/course_templates/671/labs/592578", solutionUrl: "https://youtu.be/0niv3BFwQ_s?si=xoWetpyXCSb_4CPz" },
      { title: "App Engine: Qwik Start - Go", labUrl: "https://www.skills.google/course_templates/671/labs/592579", solutionUrl: "https://youtu.be/8IRdsJi6r4k?si=jKXxn7w1K9Ydji5_" },
      { title: "App Engine: Qwik Start - PHP", labUrl: "https://www.skills.google/course_templates/671/labs/592580", solutionUrl: "https://youtu.be/lyuUDZXjH24?si=yRps4xWCpd8aLZAG" },
      { title: "App Engine: 3 Ways: Challenge Lab", labUrl: "https://www.skills.google/course_templates/671/labs/592581", solutionUrl: "https://youtu.be/8Xabxwj1AOg?si=Igqf8KPDDLGhNDJO" },
    ],
  },
  {
    title: "Cloud Speech API: 3 Ways",
    courseUrl: "https://www.skills.google/course_templates/700?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "It Speaks! Create Synthetic Speech Using Text-to-Speech", labUrl: "https://www.skills.google/course_templates/700/labs/595704", solutionUrl: "https://youtu.be/5MxroxT8hX0?si=urZ4VQWQ7oQC4tK5" },
      { title: "Translate Text with the Cloud Translation API", labUrl: "https://www.skills.google/course_templates/700/labs/595705", solutionUrl: "https://youtu.be/h_BuxhtVrrs?si=AOwgH9ovTuu40cCg" },
      { title: "Speech to Text Transcription with the Cloud Speech API", labUrl: "https://www.skills.google/course_templates/700/labs/595706", solutionUrl: "https://youtu.be/IQjExpHxOJ8?si=1jyzJqGcOfajsoOJ" },
      { title: "Cloud Speech API 3 Ways: Challenge Lab", labUrl: "https://www.skills.google/course_templates/700/labs/595707", solutionUrl: "https://youtu.be/8yPfTYTDyyA?si=6Hqh79UQ9zjrnVZM" }
    ],
  },
  {
    title: "Monitoring in Google Cloud",
    courseUrl: "https://www.skills.google/course_templates/747?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "Cloud Monitoring: Qwik Start", labUrl: "https://www.skills.google/course_templates/747/labs/597373", solutionUrl: "https://youtu.be/I5KWhLfWnro?si=khVjXwRdZwrNI8SS" },
      { title: "Monitoring and Logging for Cloud Run Functions", labUrl: "https://www.skills.google/course_templates/747/labs/597374", solutionUrl: "https://youtu.be/SdKUJpRe-GU?si=APJGnjYCBFW6dS8M" },
      { title: "Monitor an Apache Web Server using Ops Agent", labUrl: "https://www.skills.google/course_templates/747/labs/597375", solutionUrl: "https://youtu.be/jJoK3CyDbr4?si=oswcegz-h5AzNMkF" },
      { title: "Monitoring in Google Cloud: Challenge Lab", labUrl: "https://www.skills.google/course_templates/747/labs/597376", solutionUrl: "https://youtu.be/rVYuk-qEqhs?si=EeyarLmJxr-WCBnv" }
    ],
  },
  {
    title: "Analyze Speech and Language with Google APIs",
    courseUrl: "https://www.skills.google/course_templates/634",
    solutionsUrl: "#",
    labs: [
      { title: "Cloud Natural Language API: Qwik Start", labUrl: "https://www.skills.google/course_templates/634/labs/586893", solutionUrl: "https://youtu.be/gdTxNBBTrQE?si=ckkSPdXlLVJhTMVM" },
      { title: "Speech-to-Text API: Qwik Start", labUrl: "https://www.skills.google/course_templates/634/labs/586894", solutionUrl: "https://youtu.be/kNMPvoVwTBw?si=hP54AvNJDcNKeY-P" },
      { title: "Entity and Sentiment Analysis with the Natural Language API", labUrl: "https://www.skills.google/course_templates/634/labs/586895", solutionUrl: "https://youtu.be/XsEiolKVH2U?si=8t_1uxE4HwPGM7hJ" },
      { title: "Analyze Speech & Language with Google APIs: Challenge Lab", labUrl: "https://www.skills.google/course_templates/634/labs/586896", solutionUrl: "https://youtu.be/75FktGg2fSo?si=LDST74h6mIDXNIdf" }
    ],
  },
  {
    title: "Prompt Design in Vertex AI",
    courseUrl: "https://www.skills.google/course_templates/976?utm_source=gcaf-site&utm_medium=website&utm_campaign=arcade-facilitator24",
    solutionsUrl: "#",
    labs: [
      { title: "Generative AI with Vertex AI: Prompt Design", labUrl: "https://www.skills.google/course_templates/976/labs/594524", solutionUrl: "https://youtu.be/VjK9KW4UWh8?si=-5WPk-ST2utz6SDs" },
      { title: "Get Started with Vertex AI Studio", labUrl: "https://www.skills.google/course_templates/976/labs/594525", solutionUrl: "https://youtu.be/MRxoTK45fdc?si=DmodaRotjv2zNihF" },
      { title: "Getting Started with Google Generative AI Using the Gen AI SDK", labUrl: "https://www.skills.google/course_templates/976/labs/594526", solutionUrl: "https://youtu.be/2QwdFs5E4mg?si=4AxZMY6IYRCTAUdE" },
      { title: "Prompt Design in Vertex AI: Challenge Lab", labUrl: "https://www.skills.google/course_templates/976/labs/594527", solutionUrl: "https://youtu.be/7yISoZuL2ZQ?si=vBD8IkvttSydyAbX" }
    ],
  },
  {
    title: "Develop GenAI Apps with Gemini and Streamlit",
    courseUrl: "https://www.skills.google/course_templates/978",
    solutionsUrl: "#",
    labs: [
      { title: "Getting Started with the Gemini API in Vertex AI with cURL", labUrl: "https://www.skills.google/course_templates/978/labs/592569", solutionUrl: "https://youtu.be/2RfDWO6AUXQ?si=O9WTKOx5QD2J5pWy" },
      { title: "Introduction to Function Calling with Gemini", labUrl: "https://www.skills.google/course_templates/978/labs/592570", solutionUrl: "https://youtu.be/vTDc6QAlUAY?si=e1xSKv2NnN4g9uAJ" },
      { title: "Getting Started with Google Generative AI Using the Gen AI SDK", labUrl: "https://www.skills.google/course_templates/978/labs/592571", solutionUrl: "https://youtu.be/2QwdFs5E4mg?si=3ciZZpErPjZ5CcjO" },
      { title: "Utilize the Streamlit Framework with Cloud Run and the Gemini API in Vertex AI", labUrl: "https://www.skills.google/course_templates/978/labs/592572", solutionUrl: "https://youtu.be/0SkTYllxgbw?si=ygkfHyXK1tPXHvU3" },
      { title: "Develop GenAI Apps with Gemini and Streamlit: Challenge Lab", labUrl: "https://www.skills.google/course_templates/978/labs/592573", solutionUrl: "https://youtu.be/eX5sEVTtAts?si=wlWfRSlEYoVgys7r" },
    ],
  },

];

const Syllabus = () => {
  const HEIGHT_PADDING = 12; // extra px so content never looks cramped when animating
  // which cards have their content populated (toggle per click)
  const [openPanels, setOpenPanels] = useState<Record<number, boolean>>({});
  // which rows are in expanded mode (affects only cards in that row)
  const [rowExpanded, setRowExpanded] = useState<Record<number, boolean>>({});
  // dynamic per-row max height (px) for smooth equal-height expansion
  const [rowHeights, setRowHeights] = useState<Record<number, number>>({});
  // refs to each panel's inner content for measuring scrollHeight
  const panelRefs = useRef<Record<number, HTMLDivElement | null>>({});
  // arcade section expansion
  const [arcadeOpen, setArcadeOpen] = useState(false);

  const columns = 3; // keep 3 per row as requested
  const getRowIndex = (i: number) => Math.floor(i / columns);

  const togglePanel = (i: number) => {
    const row = getRowIndex(i);
    setRowExpanded((prev) => ({ ...prev, [row]: true }));
    setOpenPanels((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      // compute next height for this row using measured content scrollHeights
      // defer to end of tick to ensure DOM updates
      setTimeout(() => {
        const start = row * columns;
        const end = start + columns;
        let maxH = 0;
        for (let idx = start; idx < end; idx++) {
          if (next[idx]) {
            const el = panelRefs.current[idx];
            if (el) {
              maxH = Math.max(maxH, el.scrollHeight);
            }
          }
        }
        setRowHeights((prevHeights) => ({ ...prevHeights, [row]: Math.max(0, maxH + HEIGHT_PADDING) }));
        // collapse row if none open
        const anyOpen = Array.from({ length: columns }).some((_, k) => next[start + k]);
        if (!anyOpen) {
          setRowExpanded((prevRows) => ({ ...prevRows, [row]: false }));
          setRowHeights((prevHeights) => ({ ...prevHeights, [row]: 0 }));
        }
      }, 0);
      return next;
    });
  };

  // Recompute row heights whenever openPanels or rowExpanded change to ensure smooth animation
  useEffect(() => {
    const rowsToUpdate = new Set<number>();
    Object.keys(openPanels).forEach((k) => rowsToUpdate.add(getRowIndex(Number(k))));
    rowsToUpdate.forEach((row) => {
      const start = row * columns;
      const end = start + columns;
      let maxH = 0;
      for (let idx = start; idx < end; idx++) {
        if (openPanels[idx]) {
          const el = panelRefs.current[idx];
          if (el) maxH = Math.max(maxH, el.scrollHeight);
        }
      }
      setRowHeights((prev) => ({ ...prev, [row]: Math.max(0, maxH + HEIGHT_PADDING) }));
    });
  }, [openPanels, rowExpanded]);

  // Also adjust heights on window resize for perfect fit to boxes
  useEffect(() => {
    const onResize = () => {
      const updated: Record<number, number> = {};
      const totalRows = Math.ceil(skillBadges.length / columns);
      for (let row = 0; row < totalRows; row++) {
        if (!rowExpanded[row]) continue;
        const start = row * columns;
        const end = start + columns;
        let maxH = 0;
        for (let idx = start; idx < end; idx++) {
          if (openPanels[idx]) {
            const el = panelRefs.current[idx];
            if (el) maxH = Math.max(maxH, el.scrollHeight);
          }
        }
        updated[row] = Math.max(0, maxH + HEIGHT_PADDING);
      }
      if (Object.keys(updated).length) {
        setRowHeights((prev) => ({ ...prev, ...updated }));
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openPanels, rowExpanded]);

  return (
    <div className="min-h-screen bg-background pb-36">
      <Header />
      
      <main className="container max-w-6xl xl:max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Hero Header */}
          <div className="relative text-center space-y-5">
            {/* subtle glow background */}
            <div className="pointer-events-none absolute -inset-x-10 -top-6 h-56 bg-gradient-to-r from-cyan-500/10 via-primary/10 to-emerald-500/10 blur-2xl" />
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 shadow-sm hover:shadow-primary/20 transition-shadow duration-300 hover:bg-primary/15">
              <span className="text-2xl md:text-xl font-semibold text-primary">📚 STUDY MATERIALS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              Campaign Syllabus & Solutions <span role="img" aria-label="book">📖</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Complete guide to all 20 courses with solutions and resources!
            </p>

            {/* Warning CTA */}
            <div className="mx-auto max-w-2xl">
              <div className="group flex items-center justify-between gap-4 rounded-2xl border border-yellow-500/50 bg-yellow-500/10 px-5 py-4 text-lg text-yellow-600 font-bold mt-12 transition-all duration-300 hover:bg-yellow-500/15 hover:border-yellow-500/70 hover:translate-y-[-2px] hover:shadow-md">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 group-hover:animate-pulse" />
                  <span>Labs not opening? Getting errors? Open from here!        👇</span>
                </div>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Syllabus CTA card */}
            <a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRB406SGkUY4Q5jRqYBSZqRGfsK6MsESzdtbHaoXnYT3isC2CcBFrloYq3gcO61Gbw58qSw9RB4FXoM/pubhtml?gid=0&single=true" className="block">
              <div className="mx-auto max-w-3xl mb-20">
                <Card className="group relative overflow-hidden p-6 border-primary/30 bg-gradient-to-r from-slate-800/20 to-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 hover:translate-y-[-2px] rounded-2xl">
                  {/* animated gradient sheen */}
                  <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background:"radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.12), transparent 40%)"}} />
                  <div className="relative flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <BookOpen className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-2xl font-bold text-foreground">Complete Campaign Syllabus</h3>
                      <p className="text-sm text-muted-foreground">View full syllabus with all courses, labs, and solution links in one place!</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Card>
              </div>
            </a>
          </div>

          {/* Skill Badges grid */}
          <div className="mt-5 mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🎯</span>
              <h2 className="text-3xl font-bold text-foreground">Skill Badges (19 Courses)</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillBadges.map((item, idx) => {
                const isOpen = !!openPanels[idx];
                const row = getRowIndex(idx);
                const rowIsExpanded = !!rowExpanded[row];
                const labs = item.labs;
                
                return (
                  <Card
                    key={idx}
                    className="group relative overflow-visible p-6 min-h-[200px] border border-border/60 bg-card/60 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1.5"
                  >
                    {/* index badge */}
                    <div className="absolute -right-3 -top-3 w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-extrabold grid place-items-center shadow-md">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-bold text-xl leading-snug text-foreground pr-10">{item.title}</h3>

                      {/* Course Page button with hover effect */}
                      <a
                        href={item.courseUrl}
                        target="_blank"
                        className="block rounded-lg px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-emerald-500 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.01] focus:ring-2 focus:ring-primary/50"
                      >
                        ▮ Course Page
                      </a>

                      {/* Solutions toggle button with hover effect */}
                      <button
                        type="button"
                        onClick={() => togglePanel(idx)}
                        className="flex w-full items-center justify-between rounded-lg px-5 py-2.5 text-sm font-semibold border border-yellow-400/70 text-yellow-500 hover:text-yellow-600 hover:border-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/15 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/40"
                      >
                        <span>View All Labs & Solutions</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Row-scoped expandable panel (neutral). Height animates to tallest open card in this row. */}
                      <div
                        className="rounded-2xl border border-border/40 bg-muted/10 overflow-hidden"
                        style={{
                          height: rowIsExpanded ? (rowHeights[row] ?? 0) : 0,
                          transition: 'height 500ms ease-in-out'
                        }}
                      >
                        {/* Show colorful box only for the OPEN card; others stay neutral placeholders */}
                        {isOpen ? (
                          <div
                            ref={(el) => (panelRefs.current[idx] = el)}
                            className="h-full"
                          >
                            <div className="m-3 rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-blue-400/30 to-emerald-400/40">
                              <div
                                className="rounded-2xl bg-background/60 backdrop-blur-[1px] p-5 space-y-5"
                                style={{ opacity: 1, transform: 'translateY(0)', transition: 'opacity 500ms ease, transform 500ms ease' }}
                              >
                                {labs.map((lab, i2) => (
                                  <div key={i2} className="pb-5 border-b border-border/30 last:border-b-0">
                                    <div className="font-bold text-[16px] text-foreground mb-3">{lab.title}</div>
                                    <div className="flex items-center gap-3">
                                      <a
                                        href={lab.labUrl}
                                        target="_blank"
                                        className="px-4 py-2 text-xs font-semibold rounded-md bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-sm hover:shadow-lg hover:scale-[1.015] transition-all"
                                      >
                                        🚀 Start Lab
                                      </a>
                                      <a
                                        href={lab.solutionUrl}
                                        target="_blank"
                                        className="px-4 py-2 text-xs font-semibold rounded-md border border-rose-500/60 text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 hover:shadow-lg transition-all"
                                      >
                                        🎥 Solution
                                      </a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : rowIsExpanded ? (
                          <div className="h-full" />
                        ) : null}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Arcade Game Section */}
          
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Syllabus;
