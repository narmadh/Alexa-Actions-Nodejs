import { conversation, Image, Simple } from "@assistant/conversation"

import { getContent, getIntroMessage, getTeachIntentPrompt } from "../api/functionCalls.js"

const app = conversation()

app.handle('greeting', async (conv) => {
    let message = await getIntroMessage()
    conv.add(new Simple({
        speech: message,
        text: message
    }))
})

app.handle('teachContentScene', async (conv) => {
    let message = await getTeachIntentPrompt()
    conv.add(new Simple({
        speech: message,
        text: message
    }))
})

app.handle('learnLessonSlotValidation', (conv) => {
    let message = "Ok! "
    conv.add(new Simple({
        speech: message,
        text: message
    }))
})

app.handle('reapeatTeaching', async (conv) => {
    let message = await getTeachIntentPrompt()
    conv.add(new Simple({
        speech: message,
        text: message
    }))
})

app.handle('teachContentFilled', async (conv) => {
    const message = await getContent(conv.scene.slots['subject'].value, conv.scene.slots['lesson'].value, conv.scene.slots['lesson_number'].value)
    const xtra = message.message2
    const ssml = '<speak>' + message.ssml + xtra + '</speak>'

    conv.add(new Simple({
        speech: message.message,
        text: message.message
    }))
    conv.add(ssml)
    conv.add(new Image({
        url: message.img,
        alt: message.name
    }))

})

export default app

