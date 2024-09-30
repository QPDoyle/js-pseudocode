//outline for psuedo code

/*
Whack a Mole outline:
    - Hammer/Player object
    - List structure "Holes"
    - List stores 3 "Moles" that can be toggles either "up" or "down" (could be represented as 0 or 1 ect.)

Player End:

    Checks where player mouse is
        If mouse is hovering above hole
            If mouse click
                If mole up
                    Score +1 -> mole toggled to down 
                Else
                    Score 0 -> user miss, 
Mole Object End:
    Using a random timer toggle the status of the moles "up or down"
        If User Click
            If mole in hole
                mole down
            Else
                Mole status unchanged
    Timer Reset
*/