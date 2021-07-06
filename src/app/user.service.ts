import { Observable, of } from  'rxjs';
import { delay } from  'rxjs/operators';


export class UserService{
    private role: string = "";
    private connected:boolean=false;

    public isConnected(): boolean {
        return this.connected;
    }

    public setConnected(connected: boolean): void {
        this.connected = connected;
    }


   

    public getRole(): string {
        return this.role;
    }

    public setRole(role: string): void {
        this.role = role;
    }



  constructor(){}

}