
import { db } from './api.js'

export const getIntroMessage = async () => {
    const result = await db.ref('prompts').child("mainIntro").get()
    return result.val()
}

export const getTeachIntentPrompt = async () => {
    const result = await db.ref('prompts').child("teachContentSpeech").get()
    return result.val()
}

export const getAllSubjects = async () => {
    const result = await db.ref('subjects').get()
    return Object.keys(result.val())
}

export const getContent = async (subject, lesson, lesson_number) => {

    subject = subject.toLowerCase()
    lesson = lesson.toLowerCase()
    console.log(subject, lesson, lesson_number - 1)
    const result = await db.ref('subjects').child(subject).child(lesson).child(lesson_number - 1).get()
    console.log(result.val())
    let name = ""
    let content = ""
    let message = "", message2 = ""
    let ssml = ""
    let img = ""
    let res = result.val()
    console.log("\n\n\n", res)
    name = res.names[0]
    let i = 0
    for (let x in res.content) {
        i++
        content = content + "\nPart " + i + ":  " + res.content[x] + ".\n   ";
    }
    if (result.child('audio').exists) {
        message = `Let us start to learn lesson number ${lesson_number} which is ${name}. `
        ssml = getAudioSSML(res.audio)
        message2 = " Hope you listened to it thoroughgly. Here is the lesson content :" + content
    }
    else {
        message = `Let us start to learn lesson number ${lesson_number} which is ${name}. ${content}`
        message2 = " "
    }

    if (result.child('img').exists) {
        img = res.img
    }

    let response = { name, message, message2, ssml, img }
    return response
}

export const getAudioSSML = audio_url => {
    let message = `Listen to this and learn from the prompt...<audio src="${audio_url}"></audio>`
    return message
}

const validateInput = (slot) => {
    if (slot == 'subject') {
        data = getAllSubjects()
        if (value in data)
            return true
        else
            return false
    }
    else if (slot == 'lesson') {
        data = getLessonsBySubject(sub)
        if (value in data)
            return true
        else
            return false
    }
    elif(slot == 'lesson_number')
    data = getNumberOfLessons(sub, lesson)
    if (value <= data)
        return true
    else
        return false
}