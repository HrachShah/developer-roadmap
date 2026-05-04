import type { QuestionAnswerChatMessage } from '../components/ContentGenerator/QuestionAnswerChat';

export function storeQuestionAnswerChatMessages(
  messages: QuestionAnswerChatMessage[],
) {
  const sessionId = Date.now().toString();

  localStorage.setItem(sessionId, JSON.stringify(messages));
  localStorage.setItem('lastMessagesSessionId', sessionId);

  return sessionId;
}

export function getQuestionAnswerChatMessages(sessionId: string) {
  const messages = localStorage.getItem(sessionId);
  if (!messages) {
    return [];
  }

  try {
    return JSON.parse(messages);
  } catch {
    return [];
  }
}

export function getLastMessagesSessionId() {
  return localStorage.getItem('lastMessagesSessionId');
}

export function clearQuestionAnswerChatMessages() {
  localStorage.removeItem('lastMessagesSessionId');
}
