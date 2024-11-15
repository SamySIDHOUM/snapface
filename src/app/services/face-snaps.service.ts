import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSanps: FaceSnap[] = [
        new FaceSnap(
          'test',
          'Lorem lapsus',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date(),
          3
        ),
        new FaceSnap(
          'test 1',
          'Lorem lapsus',
          'https://cdn.pixabay.com/photo/2018/08/31/18/21/fantasy-3645269_1280.jpg',
          new Date(),
          7
        ).withLocation('toto'),
        new FaceSnap(
          'test toto 2',
          'Lorem lapsus',
          'https://cdn.pixabay.com/photo/2023/10/24/02/49/bike-8337261_1280.jpg',
          new Date(),
          150
        )
      ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSanps];
    }

    snapFaceSnapById(faceSnapId: string, SnapType: SnapType): void {
        const foundFaceSnap = this.faceSanps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found!');
        }
    foundFaceSnap.snap(SnapType);
    }

}