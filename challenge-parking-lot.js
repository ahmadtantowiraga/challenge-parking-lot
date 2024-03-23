class Car{
    constructor(nopol, pemilik){
        this.nopol=nopol;
        this.pemilik=pemilik;
    }
}

class ParkingLot{
    capacity;
    remaining;
    cars;
    constructor(capacity){
        this.capacity=capacity;
        this.cars=[];
    }
}

function startPark(capacity, starPark){
    setTimeout(()=>{
        const parkingLot=new ParkingLot(capacity);
        parkingLot.remaining=capacity;
        console.log(`Tempat parkir berhasil dibuat dengan kapasitas ${capacity} kendaraan`);

        const park=(car, cb)=>{
            setTimeout(()=>{
                const checkCar=parkingLot.cars.find(carParking => carParking.nopol === car.nopol)
                if(parkingLot.remaining==0){
                    console.log(`Mohoh maaf parkir sudah penuh.`)
                }else if(!checkCar){
                    parkingLot.cars.push(car);
                    console.log(`Mobil ${car.pemilik} dengan Nopol ${car.nopol} berhasil parkir.`)
                    parkingLot.remaining -=1;
                }else{
                    console.log(`Mobil ${car.pemilik} dengan Nopol ${car.nopol} sudah parkir sebelumnya.`)
                }
                cb();
            }, 3000)
        }

        const leave=(nopol, cb)=>{
            setTimeout(()=>{
                const checkCar=parkingLot.cars.find(carParking=> carParking.nopol== nopol);
                const checkCarIndex=parkingLot.cars.findIndex(carParking=> carParking.nopol== nopol);
                if (checkCar){
                    console.log(`Mobil ${checkCar.pemilik} dengan Nopol ${nopol} sudah keluar.`);
                    parkingLot.cars.splice(checkCarIndex, 1);
                    parkingLot.remaining +=1;
                }else{
                    console.log(`Mobil dengan nopol ${nopol} tidak ada.`)
                }
                cb();
            }, 1500)
        }
        const check=(cb)=>{
            setTimeout(()=>{
                console.log(parkingLot);
                cb();
            }, 500)
        }

        starPark(park, leave, check);

    }, 5000)
}
const mobil1=new Car("BE001", "Alex");
const mobil2=new Car("B2021", "Blex");
const mobil3=new Car("C012", "Clex");
const mobil4=new Car("D0101", "Dlex");
const mobil5=new Car("E0101", "Elex");

startPark(3, (park, leave, check) => {
    park(mobil1, ()=>{
        check(()=>{
            park(mobil2, ()=>{
                leave("B2021",()=>{
                    park(mobil3,()=>{
                        park(mobil4, ()=>{
                            leave("B2019",()=>{
                                check(()=>{
                                    park(mobil5, ()=>{
                                        check(()=>{
                                            console.log('FIX PROJECT')
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


