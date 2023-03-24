import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IQuestion } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getAllQuestions(): Observable<IQuestion[]> {
    const data = this.getDataFromLocalStorage() || [];
    return of(data);
  }

  addQuestion(question: IQuestion): Observable<IQuestion> {
    const data = this.getDataFromLocalStorage();
    if (data) {
      this.saveDataToLocalStorage([question, ...data]);
    } else {
      this.saveDataToLocalStorage([question]);
    }
    return of(question);
  }
  deleteQuestion(id: string): Observable<string> {
    const data = this.getDataFromLocalStorage();
    if (data) {
      const questions = data.filter((question) => question.id !== id);
      this.saveDataToLocalStorage(questions);
    }
    return of(id);
  }
  revertQuestion(id: string): Observable<IQuestion> {
    const data = this.getDataFromLocalStorage();
    if (data) {
      const questions = data.map((question) =>
        question.id === id
          ? { ...question, answered: false, answer: null }
          : question,
      );
      this.saveDataToLocalStorage(questions);
    }
    const revertedQuestion = this.getDataFromLocalStorage()?.find(
      (question) => question.id === id,
    );
    return of(revertedQuestion as IQuestion);
  }
  answerQuestion(question: IQuestion): Observable<IQuestion> {
    const data = this.getDataFromLocalStorage();
    if (data) {
      const questions = data.map((localQuestion) =>
        localQuestion.id === question.id ? question : localQuestion,
      );
      this.saveDataToLocalStorage(questions);
    }
    return of(question);
  }
  updateQuestion(question: IQuestion): Observable<IQuestion> {
    const data = this.getDataFromLocalStorage();
    if (data) {
      const updatedData = data.map((localQuestion) => {
        if (localQuestion.id === question.id) {
          return question;
        } else {
          return localQuestion;
        }
      });
      this.saveDataToLocalStorage(updatedData);
    }
    return of(question);
  }

  private saveDataToLocalStorage(data: IQuestion[]): void {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem('questions', stringifiedData);
  }
  private getDataFromLocalStorage(): IQuestion[] | null {
    const data = localStorage.getItem('questions');
    const parsedData = data && JSON.parse(data);
    return parsedData;
  }
}
